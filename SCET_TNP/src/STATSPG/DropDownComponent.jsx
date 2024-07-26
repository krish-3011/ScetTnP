import React, { useState } from 'react';

const AcademicYearDropdown = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const academicYears = [];
  const currentYear = new Date().getFullYear();
  
  // Generate academic years from 2000-2001 to the current year
  for (let year = 2000; year <= currentYear; year++) {
    academicYears.push(`${year}-${year + 1}`);
  }

  return (
    <div className='drop-down-format'>
      <label className='YEAR-FONT'  htmlFor="academicYear">Year: </label>
      <select id="academicYear" value={selectedYear} onChange={handleChange}>
        <option value="" disabled>Select year</option>
        {academicYears.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default AcademicYearDropdown;
