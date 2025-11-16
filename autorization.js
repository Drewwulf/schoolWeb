document.getElementById("formregister").addEventListener("submit", function (event) {
    event.preventDefault();

    const dataform = new FormData(this);
    const data = {};
    dataform.forEach((value, key) => data[key] = value);

    const jsondata = JSON.stringify(data, null, 2);

    const blob = new Blob([jsondata], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    link.click();
});
