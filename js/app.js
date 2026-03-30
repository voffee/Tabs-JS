
const tabs = document.querySelector(`.tabs`);
const tabButtons = document.querySelectorAll(`[role=tab]`);
const tabPanels = document.querySelectorAll(`[role=tabpanel]`);

function handleTabClick(e) {
    // Hide all Tab Panels
    tabPanels.forEach(panel =>  {
        panel.hidden = true;
    });
    // Mark all tabs as unselected
    tabButtons.forEach(tab => {
        tab.ariaSelected = false;
    });
    // Mark the clicked tab as selected
    e.currentTarget.ariaSelected = true;
    // Find the associated tabpanel and show it

    //METHOD 1
    const { id } = e.currentTarget;
    const showPanel = tabs.querySelector(`[aria-labelledby=${id}]`);
    showPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener(`click`, handleTabClick));