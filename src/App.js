import { getAllInputsApi } from "api/inputs";
import { inputType } from "constatns/fieldsType";
import { useEffect, useState } from "react";
import "./App.scss";
import InputData from "fakeData/data.json";
import { useForm } from "react-hook-form";

function App() {
  // this function was responsible for getting the data from the endpoint
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getAllInputsApi();
  //     setData(data);
  //     console.log(data, "data");
  //   }
  //   fetchData();
  // }, []);

  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    const propertyValues = Object.values(data);

    const newData = {
      sample_id: InputData?.data?.id,
      fields: propertyValues,
    };
    console.log(newData);
  };

  const defaultInputRegister = (field) => {
    register(`${field?.id}.field_id`, { value: field?.id });
    return null;
  };
  const defaultCheckBoxesRegister = (field) => {
    register(`${field?.id}.field_id`, { value: field?.id });
    register(`${field?.id}.options`, { value: [] });

    return null;
  };

  const renderInputFields = InputData?.data?.fields?.map((field) => {
    switch (field.type) {
      case 4:
        return (
          <select
            type={inputType[field?.type]}
            id={field?.id}
            name={field?.name}
            required={field?.is_mandatory}
            onChange={(e) => fieldChanged(e)}
            {...register(`${field?.id}.answer`)}
          >
            {defaultInputRegister(field)}
            <option value="" selected disabled hidden>
              اختر
            </option>
            {field?.options?.map((option) => (
              <>
                <option key={option?.id} value={option?.name}>
                  {option?.name}
                </option>
                {option?.has_comment && <textarea rows={15} cols={15} />}
              </>
            ))}
          </select>
        );
      case 5:
        return (
          <fieldset>
            <legend>{field?.name}</legend>
            {field?.options?.map((option, index) => (
              <>
                <input
                  type={inputType[field?.type]}
                  id={option?.id}
                  name={field?.id}
                  value={option?.id}
                  {...register(`${field?.id}.options.${index}.option_id`)}
                />
                {defaultCheckBoxesRegister(field)}
                <label for={option?.name}>{option?.name}</label>
                {option?.has_comment && (
                  <textarea
                    id={option?.id}
                    name={field?.id}
                    rows={15}
                    cols={15}
                    {...register(`${field?.id}.options.${index}.comment`)}
                  />
                )}
                <br />
              </>
            ))}
          </fieldset>
        );
      case 6:
        return (
          <fieldset>
            <legend>{field?.name}</legend>
            {field?.options?.map((option, index) => (
              <>
                {defaultInputRegister(field)}
                <input
                  type={inputType[field?.type]}
                  id={option?.id}
                  name={field?.id}
                  value={option?.id}
                  {...register(`${field?.id}.answer`)}
                />
                <label for={option?.name}>{option?.name}</label>
                <br />
              </>
            ))}
          </fieldset>
        );

      default:
        return (
          <div className="wrapper">
            <label for={field?.id}>{field?.name}</label>
            {defaultInputRegister(field)}
            <input
              type={inputType[field?.type]}
              id={field?.id}
              name={field?.name}
              required={field?.is_mandatory}
              {...register(`${field?.id}.answer`)}
            />
          </div>
        );
    }
  });

  return (
    <div className="App">
      <h1>appsSquare</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderInputFields}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
