import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./categoryTagStyling.css";

import { getCategories } from "../../../app/api/category";
import { getTags } from "../../../app/api/tag";
import { setCategory, setTags } from "../../../app/features/actions/productActions";

function CategoryTag() {
  const [categories, setCategories] = useState([]);
  const [label, setLabel] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch Category
    async function fetchCategories() {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData.data);
        console.log(categoriesData.data);

      } catch (err) {
        console.error("Error fetching categories:", err.message);
      }
    }

    // Fetch Tag
    async function fetchLabels() {
      try {
        const tagsData = await getTags();
        setLabel(tagsData.data);
        console.log(tagsData.data);

      } catch (err) {
        console.error("Error fetching categories:", err.message);
      }
    }

    fetchCategories();
    fetchLabels();
  }, []);

  function handleProductCategory(category) {
    dispatch(setCategory(category))
  };

  function handleProductTag(tag) {
    dispatch(setTags([tag]))
  };

  return (
    <>
    {/* Category */}
    <div className="category-list">
      <h3>Category</h3>
      {Array.isArray(categories) ? (
        categories.map((category, index) => (
          <p key={index} onClick={() => handleProductCategory(category)}>{category.name}</p>
        ))
      ) : (
        <p>No categories found</p>
      )}
    </div>
    
    {/* Tag */}
    <div className="tag-list">
      <h3>Tags</h3>
      {Array.isArray(label) ? (
        label.map((tag, index) => (
          <p key={index} onClick={() => handleProductTag(tag)}>{tag.name}</p>
        ))
      ) : (
        <p>No tags found</p>
      )}
    </div>
    </>
  )
};

export default CategoryTag;