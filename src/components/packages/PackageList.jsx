import { useEffect, useState } from "react";
import "./Packages.css";
import { getAllPackages } from "../../services/packageService";
import { PlantPackage } from "./Package";

export const PackageList = () => {
  const [allPackages, setAllPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPackages().then((packagesArray) => {
      setAllPackages(packagesArray);
      setFilteredPackages(packagesArray);
    });
  }, []);

  useEffect(() => {
    const foundPackage = allPackages.filter((plantPackage) =>
      plantPackage.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPackages(foundPackage);
  }, [searchTerm, allPackages]);

  return (
    <div>
      <div className="title">
        <h1>Plant Packages</h1>
      </div>
      <div className="packages-container">
        <div className="filter-bar">
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            placeholder="Search Plant Packages"
            className="package-search"
          />
        </div>
        <article className="packages">
          {filteredPackages.map((plantObj) => {
            return <PlantPackage plantPackage={plantObj} key={plantObj.id} />;
          })}
        </article>
      </div>
    </div>
  );
};
