import { useEffect, useState } from "react";
import "./Packages.css";
import { getAllPackages } from "../../services/packageService";

export const PackageList = () => {
  const [allPackages, setAllPackages] = useState([]);

  useEffect(() => {
    getAllPackages().then((packagesArray) => {
      setAllPackages(packagesArray);
      console.log("Packages Set!");
    });
  }, []);

  return (
    <div className="packages-container">
      <h2>Packages</h2>
      <article className="packages">
        {allPackages.map((plantPackage) => {
          return (
            <section className="package" key={plantPackage.id}>
              <header className="package-info">
                Package #{plantPackage.id}
              </header>
              <div>
                <img src={plantPackage.image} alt="image of plant package" />
              </div>
              <div className="package-info">
                Description: {plantPackage.description}
              </div>
              <div>
                <div className="package-info">Availability: </div>
                <div>
                  {plantPackage.availability ? "In Stock" : "Out of Stock"}
                </div>
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
};
