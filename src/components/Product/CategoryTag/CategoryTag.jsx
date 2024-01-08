import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./categoryTagStyling.css";

import { getCategories } from "../../../app/api/category";
import { getTags } from "../../../app/api/tag";
import { setCategory, setTags } from "../../../app/features/actions/productActions";

function CategoryTag({ fetchProductsByCategory, fetchProductsByTag, setProducts }) {
  const [categories, setCategories] = useState([]);
  const [label, setLabel] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategoriesAndLabel() {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData.data);
        // console.log(categoriesData.data);

        const tagsData = await getTags();
        setLabel(tagsData.data);
        // console.log(tagsData.data);

      } catch (err) {
        console.error("Error fetching categories:", err.message);
      }
    }

    fetchCategoriesAndLabel();
  }, []);

  async function handleCategory(categoryId) {
    try {
      dispatch(setCategory(categoryId))
      const products = await fetchProductsByCategory(categoryId)
      setProducts(products);
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
      // console.log(products, 'tag');
      
    } catch (error) {
      console.error('Error fetching products by tag:', error);
    };
  };

  return (
    <div>
      {/* Category */}
      <div className="category-list">
        <h3>Category</h3>
        {Array.isArray(categories) ? (
          categories.map((category, index) => (
            <p key={index} onClick={() => handleCategory(category.name)}>{category.name}</p>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </div>
      
      {/* Tag */}
      <div className="tag-list">
        <h3>Tags</h3>
        {Array.isArray(label) ? (
          label.map((tags, index) => (
            <p key={index} onClick={() => handleTags(tags.name)}>{tags.name}</p>
          ))
        ) : (
          <p>No tags found</p>
        )}
      </div>
    </div>
  )
};

export default CategoryTag;