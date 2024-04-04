import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Api_url } from './helper';
import Autocomplete from '@mui/material/Autocomplete';
import { useMediaQuery } from '@mui/material';
function MyComponent() {
	
	const mobile = useMediaQuery('(max-width:600px)');
  const [searchInput, setSearchInput] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [userNames, setUserNames] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchDataFromDatabase = async () => {
      try {
        const response = await fetch(`${Api_url}/Otp/api/images/home`);
        const data = await response.json();
		  setItems(data);
		  console.log(data)

        // Extract unique userIds from items
        const userIds = Array.from(new Set(data.map((item) => item.userId)));

        // Fetch user data for each userId and store it in userNames
        const userNamesData = {};
        await Promise.all(
          userIds.map(async (userId) => {
            const userResponse = await fetch(`${Api_url}/Otp/user/${userId}`);
            const userData = await userResponse.json();
            userNamesData[userId] = userData.Name;
          })
        );
        setUserNames(userNamesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromDatabase();
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.title && item.title.toLowerCase().includes(searchInput.toString().toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchInput, items]);

  const handleSearch = (event) => {
	const input = event.target.value || ''; // Use an empty string if event.target.value is undefined
	setSearchInput(input);
  };
  

  const handleOptionSelect = (event, value) => {
	if (value === null) {
	  // Handle the case when the value is cleared (e.g., option is deselected)
	  setSelectedItem(null);
	} else {
	  const selectedItem = items.find((item) => {
		const optionLabel = `${item.title}`;
		return optionLabel === value;
	  });
  
	  if (selectedItem) {
		// Navigate to the file-viewer page with the selected item's _id
		window.location.href = `/file-viewer?fileId=${selectedItem._id}`;
	  }
  
	  setSelectedItem(selectedItem);
	}
  };
  

	// Create an array of options in the format "item.title - name of that person from userID"
	// const autocompleteOptions = items.map((item) => `${item.title} - ${userNames[item.userId]}`);
	const autocompleteOptions = items.map((item) => item.title);

  return (
    <div>
      <Autocomplete
        freeSolo
        options={autocompleteOptions}
        onInputChange={handleSearch}
        onChange={handleOptionSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search..."
            variant="outlined"
            sx={{
              width: mobile?'242px':'405px',
              height:mobile?'49px': '54px',
              background: '#bdeafc',
              borderRadius: '26px',
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <SearchIcon />
              ),
            }}
          />
        )}
      />
      
    </div>
  );
}

export default MyComponent;
