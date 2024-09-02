import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const InternationalPhoneSelect = ({ setValue }: any) => {
  const [phone, setPhone] = useState("");
  const handleChange = (phone: any) => {
    setPhone(phone);
    setValue("phoneNumber" || "phone", phone);
  };

  return (
    <div className="w-full">
      <PhoneInput
        defaultCountry="gb"
        value={phone}
        inputClassName="w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default InternationalPhoneSelect;
