/* eslint-disable react/prop-types */
import "./EducationCard.css";
import { Link } from "react-router-dom";

export const EducationCard = ({
  country,
  university,
  program_name,
  degree_lvl,
  field,
  prog_url,
}) => {
  return (
    <div className="education-card">
      <div className="education-card__header">
        <h2 className="education-card__university">{university}</h2>
        <p className="education-card__country">{country}</p>
      </div>
      <div className="education-card__body">
        <p className="education-card__program">
          <b>Program:</b> <Link to={prog_url} target="_blank">{program_name}</Link>
        </p>
        <p className="education-card__degree">
          <b>Degree Level:</b>
          {degree_lvl}
        </p>
        <p className="education-card__field">
          <b>Field:</b>
          {field}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
