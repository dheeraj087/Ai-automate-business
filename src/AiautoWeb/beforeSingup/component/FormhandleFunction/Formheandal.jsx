function heandale({ e, ref, setvalidity }) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = {};
    if (ref.current[0]?.value.length < 3 || ref.current[1]?.value.length < 3) {
        e.preventDefault();
        error.company = "Name and Company name must be at least 3 characters long";
        setvalidity(error);
        return
    }
    else if (!emailPattern.test(ref.current[2].value)) {
    e.preventDefault();
        error.email = "Please enter a valid email address";
        setvalidity(error);
        return
    }
    else if (ref.current[3]?.value !== ref.current[4]?.value || ref.current[3]?.value.length < 8) {
    e.preventDefault();
        error.password = "Password and Conform password do not match and Password must be at least 8 characters long";
        setvalidity(error);
        return
    }
    else if (ref.current[5]?.value.length !== 10) {
    e.preventDefault();
        error.phone = "Please enter a valid phone number";
        setvalidity(error);
        return
    } else (setvalidity({}));

    const formData = ref.current.reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
    }, {}); 

    const finalData = {
        ...formData,
        signup: true
    };
    localStorage.setItem("signupData", JSON.stringify(finalData));
    ref.current.forEach((input) => {
        input.value = "";
    })
    window.location.reload
}

export default heandale;