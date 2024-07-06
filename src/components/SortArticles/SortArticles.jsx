import "./SortArticles.css";

function SortArticles({ handleSortChange }) {
  return (
    <>
      <label htmlFor="sorts">Sort articles by: </label>
      <select name="sort-options" id="sorts" onChange={handleSortChange}>
        <option value="">Newest (Default)</option>
        {/* <option value="-created_at">Newest</option> */}
        <option value="+created_at">Oldest</option>
        <option value="+title">Title (A-Z)</option>
        <option value="-title">Title (Z-A)</option>
        <option value="+votes">Most Votes</option>
        <option value="-votes">Least Votes</option>
        <option value="+comment_count">Most Comments</option>
        <option value="-comment_count">Least Comments</option>
      </select>
    </>
  );
}

export default SortArticles;
