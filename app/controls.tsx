import Select from "react-select";

const Controls = (props: {
  handleSort(value: any): unknown; handleSortField: (arg0: any) => void; 
}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];
  const onChangeFieldOption = (e: {
    value(value: any): unknown; target: { value: any; }; 
    }) => {
      props.handleSortField(e.value)
  }

  const handleSort = (e: {
    value(value: any): unknown; target: { value: any; }; 
    }) => {
      props.handleSort(e.value)
  }

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} inputId="sort-field" className="input" onChange={onChangeFieldOption}/>
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={handleSort}
        />
      </div>
    </div>
  );
};

export default Controls;
