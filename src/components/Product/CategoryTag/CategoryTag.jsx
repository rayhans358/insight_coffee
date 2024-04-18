import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./categoryTagStyling.css";

import { getCategories } from "../../../app/api/category";
import { getTags } from "../../../app/api/tag";
import { setCategory, setTags } from "../../../app/features/actions/productActions";
import { getProducts } from "../../../app/api/product";

function CategoryTag({ fetchProductsByCategory, fetchProductsByTag, setProducts }) {
  const [categories, setCategories] = useState([]);
  const [label, setLabel] = useState([]);
  const [loadingDataCategoriesTags, setLoadingDataCategoriesTags] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTag, setActiveTag] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategoriesAndLabel() {
      setLoadingDataCategoriesTags(true);
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData.data);
        // console.log(categoriesData.data);

        const tagsData = await getTags();
        setLabel(tagsData.data);
        // console.log(tagsData.data);

      } catch (err) {
        console.error("Error fetching categories:", err.message);
      } finally {
        setLoadingDataCategoriesTags(false);
      };
    };

    fetchCategoriesAndLabel();
  }, []);

  async function fetchingAllProducts() {
    try {
      setActiveCategory(null);
      setActiveTag(null);
      const allProductsData = await getProducts();
      // console.log(allProductsData.data.data, 'allProductsData');
      setProducts(allProductsData.data.data);

    } catch (error) {
      console.error('Error fetching all products:', error);
    };
  };

  async function handleCategory(categoryId) {
    try {
      dispatch(setCategory(categoryId))
      const products = await fetchProductsByCategory(categoryId)
      setProducts(products);
      setActiveCategory(categoryId);
      setActiveTag(null);
      // console.log(products, 'category');

    } catch (error) {
      console.error('Error fetching products by category:', error);
    };
  };

  async function handleTags(tagId) {
    try {
      dispatch(setTags([tagId]));
      const products = await fetchProductsByTag(tagId)
      setProducts(products);
      setActiveTag(tagId);
      setActiveCategory(null);
      // console.log(products, 'tag');
      
    } catch (error) {
      console.error('Error fetching products by tag:', error);
    };
  };

  return (
    <div>
      <div className="category-list">
        <h3 className="allProducts" onClick={fetchingAllProducts}>All</h3>
        <h3>Category</h3>
        {loadingDataCategoriesTags ? (
          <p className="loadingCategoriesTags-text">Loading categories . . .</p>
        ): (
          Array.isArray(categories) ? (
            categories.map((category, index) => (
              <p key={index} className={activeCategory === category.name ? 'active' : ''} onClick={() => handleCategory(category.name)}>{category.name}</p>
            ))
          ) : (
            <p>No categories found</p>
          )
        )}
      </div>
      
      <div className="tag-list">
        <h3>Tags</h3>
        {loadingDataCategoriesTags ? (
          <p className="loadingCategoriesTags-text">Loading tags . . .</p>
        ): (
          Array.isArray(label) ? (
            label.map((tags, index) => (
              <p key={index} className={activeTag === tags.name ? 'active' : ''} onClick={() => handleTags(tags.name)}>{tags.name}</p>
            ))
          ) : (
            <p>No tags found</p>
          )
        )}
      </div>
    </div>
  )
};

export default CategoryTag;