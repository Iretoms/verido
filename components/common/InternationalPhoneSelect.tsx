import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const InternationalPhoneSelect = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full">
      <PhoneInput
        defaultCountry="gb"
        value={phone}
        inputClassName="w-full"
        
        onChange={(phone) => setPhone(phone)}
        
      />
    </div>
  );
};

export default InternationalPhoneSelect;
