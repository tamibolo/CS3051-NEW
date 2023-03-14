
        const radioInputs = document.querySelectorAll("input[type='radio']");
        const telephoneLabel = document.getElementById("telephone");
        const enter = document.getElementById("submit");
        const formattedNumber = document.getElementById("formatted-number");
        const telephoneInput = document.getElementById("tel");

        radioInputs.forEach(input => {
                input.addEventListener('input', () => {
                    telephoneLabel.textContent = input.value;

                    // Removes previously chosen radio button's value
                    radioInputs.forEach(otherInput => {
                        if (otherInput !== input) {
                            otherInput.checked = false;
                        }
                    });
                });
            });

        telephoneInput.addEventListener('keydown', (event) => {
                const key = event.key;
                if (key !== 'Backspace' && key !== 'Delete' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
                    const result = formatInput(telephoneInput.value + key);
                    const formattedValue = result.formattedValue;
                    if (formattedValue !== null) {
                        telephoneInput.value = formattedValue;
                        if(result.code === "US") {
                            formattedNumber.textContent = `US tel: ${formattedValue}`;
                        } else if(result.code === "FR") {
                            formattedNumber.textContent = `France tel: ${formattedValue}`;
                        } else if(result.code === "SS") {
                             formattedNumber.textContent = `Social-Security: ${formattedValue}`;
                        }
                        event.preventDefault();
                    }
                }
            });

        enter.addEventListener("click", (event) => {
          event.preventDefault();
         formatTelephone()
        })

        function formatInput(value) {
                const countryCode = document.querySelector('input[type="radio"]:checked').name;

                let formattedValue = '';
                let obj;
                if (countryCode === 'US') {
                    formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                    obj = {code: "US", formattedValue};
                } else if (countryCode === 'FR') {
                    formattedValue = value.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');
                    obj = { code: "FR", formattedValue };
                } else if (countryCode === 'SS') {
                    formattedValue = value.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3');
                    obj = { code: "SS", formattedValue };
                }

                 return obj;
            }



