/* eslint-disable react/prop-types */
export const PlantPackage = ({ plantPackage }) => {
  return (
    <section className="package" key={plantPackage.id}>
      <header className="package-info">Package #{plantPackage.id}</header>
      <div>
        <img src={plantPackage.image} alt="image of plant package" />
      </div>
      <div className="package-info">
        Description: {plantPackage.description}
      </div>
      <div>
        <div className="package-info">Availability: </div>
        <div>{plantPackage.availability ? "In Stock" : "Out of Stock"}</div>
      </div>
    </section>
  );
};
