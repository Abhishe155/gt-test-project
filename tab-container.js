function openTab(tabId) {
    var tabIndic = document.getElementById(tabId);
  
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });
  
    // Show the selected tab
    tabIndic.style.display = 'block';
  
    // Remove any existing 'tab-button-selected' class
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('.selected');
    });
  
    // Add the 'tab-button-selected' class to the current button
    tabIndic.classList.add('.selected');
  }
  