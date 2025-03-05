import { useState } from "react";
import { OutlinedInput } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = ({ onChangeText }) => {
  const [texto, setTexto] = useState("");

  const handleChange = (e) => {
    setTexto(e.target.value);
    onChangeText(e.target.value);
  };

  return (
    <OutlinedInput
      size="small"
      sx={{ borderRadius: 4, bgcolor: "#ffffff" }}
      id="search"
      startAdornment={<SearchRoundedIcon />}
      fullWidth
      placeholder="Buscar"
      inputProps={{
        "aria-label": "weight",
      }}
      value={texto}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default SearchBar;
