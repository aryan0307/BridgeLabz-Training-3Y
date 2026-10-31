class FormBuilder {
    constructor(fields, formElement) {
        this.fields = fields;
        this.formElement = formElement;
    }

    buildForm() {
        // Field definitions are controlled by this program; labels are inserted as text.
        this.formElement.innerHTML = this.fields.map((field, index) => `
            <label>${field.label}
                <input type="${field.type}" name="${field.name}" id="field${index}" required>
            </label>
        `).join("") + '<button type="submit">Submit</button>';
    }

    getFormData() {
        const data = {};
        this.fields.forEach(field => {
            data[field.name] = this.formElement.elements[field.name].value;
        });
        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "number", label: "Age", name: "age" }
];
const formBuilder = new FormBuilder(fields, document.getElementById("dynamicForm"));
formBuilder.buildForm();
formBuilder.formElement.addEventListener("submit", event => {
    event.preventDefault();
    const formData = formBuilder.getFormData();
    document.getElementById("result").textContent = JSON.stringify(formData, null, 2);
    console.log(formData);
});
