document.querySelector("#search-input").addEventListener("input", function() {
        // Get the search input value
        const searchValue = this.value.toLowerCase();
        // Get all the list items
        const listItems = document.querySelectorAll(".list-link");
        // Loop through the list items
        listItems.forEach(function(listItem) {
          // Get the title and writer of the paper
          const title = listItem.querySelector(".title").textContent.toLowerCase();
          const writer = listItem.querySelector(".writer").textContent.toLowerCase();
          // Check if the search value matches the title or writer
          if (title.includes(searchValue) || writer.includes(searchValue)) {
            // Show the list item
            listItem.style.display = "flex";
          } else {
           
            // Hide the list item
            listItem.style.display = "none";
          }
        });
      });
