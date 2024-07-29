/* eslint-disable react/prop-types */
export const PlantPackage = ({ plantPackage }) => {
  return (
    <section className="package" key={plantPackage.id}>
      <header>
        <h2 className="package-title">{plantPackage.name} Package</h2>
      </header>
      <div className="package-content">
        <img
          className="package-image"
          src={plantPackage.image}
          alt="plant package image"
        />

        <div className="package-info">{plantPackage.description}</div>
      </div>
      <div>
        <div className="package-title">Availability: </div>
        <div className="package-info">
          {plantPackage.availability ? "In Stock" : "Out of Stock"}
        </div>
      </div>
    </section>
  );
};
