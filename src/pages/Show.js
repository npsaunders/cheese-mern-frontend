import { useState } from 'react';

function Show(props) {
  const id = props.match.params.id
  const cheese = props.cheese
  const indCheese = cheese.find(p => p._id === id)

  // state for form
  const [editForm, setEditForm] = useState(indCheese);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // handlesubmit for form
  const handleSubmit = event => {
    event.preventDefault();
    props.updateCheese(editForm, indCheese._id);
    // redirect people back to index
    props.history.push("/");
  };

  // delete 
  const removeCheese = () => {
    props.deleteCheese(indCheese._id);
    props.history.push("/");
  };

  return (
    <div className="indCheese">
      <h1>{indCheese.name}</h1>
      <h2>{indCheese.title}</h2>
      <img src={indCheese.image} alt={indCheese.name} />
      <button id="delete"
        onClick={removeCheese}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country Of Origin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />

        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  )
};

export default Show