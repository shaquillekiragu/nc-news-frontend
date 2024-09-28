import "./FilterByTopic.css";

function FilterByTopic({ handleTopicChange }) {
  return (
    <>
      {/* <label htmlFor="topics">Filter articles by topic: </label> */}
      <select name="topic-options" id="topics" onChange={handleTopicChange}>
        <option value="">All Articles</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
    </>
  );
}

export default FilterByTopic;
