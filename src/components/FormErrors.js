import React from 'react';

export const FormErrors = ({formErrors}) =>(
  <div className='formError'>
    Please fill in
    {formErrors.map(fieldName => <span key={fieldName} className="fieldErr">[ {fieldName} ]</span>)}.
  </div>
);
