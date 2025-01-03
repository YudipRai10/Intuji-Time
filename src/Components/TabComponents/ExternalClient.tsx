import React, { useState } from "react";
import dropdown_arrow from "../../assets/dropdown.png";
import search from "../../assets/search-icon.png";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { InputProps } from "../../useForm/useForm";

interface ExternalClientProps {
  register: UseFormRegister<InputProps>;
  setValue: UseFormSetValue<InputProps>;
}

function ExternalClient({
  register,
  setValue,
}: ExternalClientProps): React.ReactElement {
  const clientList: string[] = [
    "LFA",
    "Protecta",
    "Fortus",
    "Cigwel",
    "V12",
    "Sell & Parker",
  ];
  const [selectClient, setSelectClient] = useState<string>(clientList[4]);
  const [showClientList, setShowClientList] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  // Set the searchValue with what I am typing in input tag
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // Filter the list as I type in input
  const filteredClients = clientList.filter((client) =>
    client.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-2 pl-6 pr-8">
      <p className="text-pText font-semibold text-sm">Client</p>
      <div className="flex flex-col relative">
        {/* Input to be rendered on Time Modal and toggle dropdown */}
        <div
          className="bg-lightGrayBg w-full py-3 px-4 text-[#44403c] font-medium text-base flex justify-between cursor-pointer rounded-lg"
          onClick={() => setShowClientList(!showClientList)}
        >
          <span>{selectClient}</span>
          <img src={dropdown_arrow} alt="dropdown" className="object-contain" />
        </div>

        {/* Dropdown for clientList with search bar */}
        <div
          className={`absolute top-12 left-0 flex flex-col gap-2 w-full z-30 bg-white py-4 px-3 rounded-lg shadow-lg ${
            showClientList ? "block" : "hidden"
          }`}
        >
          {/* Search bar div */}
          <div className="flex p-2 gap-4 border-b border-b-lightGray">
            <img src={search} alt="search-icon" className="object-contain" />
            <input
              type="text"
              className="font-medium text-base text-gmt border-none outline-none"
              placeholder="Search"
              value={searchValue}
              onChange={handleChange}
            />
          </div>
          {/* ClientList */}
          <ul className="w-full">
            {filteredClients?.map((list) => (
              <li
                className={`p-2 font-medium text-base text-pGray cursor-pointer rounded-lg hover:bg-listHover`}
                onClick={() => {
                  setSelectClient(list);
                  setValue("externalClient", list);
                  setShowClientList(false);
                }}
                key={list}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <input
        {...register("externalClient")}
        type="hidden"
        value={selectClient}
      />
    </div>
  );
}

export default ExternalClient;
