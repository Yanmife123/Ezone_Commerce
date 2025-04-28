class Authentication {
  #emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  #userNameRegex = /^[a-zA-Z\'\-\s]{2,}$/;
  #passwordRegix = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[#$@!%&*?]).{7,}$/;
  #input_empty_message = "This email input is empty";
  #form;
  constructor(form) {
    this.#form = new FormData(form);
  }
  #is_empty(value) {
    if (value.length !== 0) {
      return false;
    }
    return true;
  }
  #verify_Pattern(regex_pattern, value) {
    return regex_pattern.test(value);
  }
  validate_UserName() {
    let name = this.#form.get("username");
    if (this.#is_empty(name)) {
      return {
        Status: false,
        message: this.#input_empty_message,
      };
    }

    return this.#verify_Pattern(this.#userNameRegex, name)
      ? {
          Status: true,
        }
      : {
          Status: false,
          message: "Must only be Alphabet",
        };
  }

  validate_Email() {
    if (this.#is_empty(this.#form.get("email"))) {
      return {
        Status: false,
        message: this.#input_empty_message,
      };
    }

    return this.#verify_Pattern(this.#emailRegex, this.#form.get("email"))
      ? {
          Status: true,
        }
      : {
          Status: false,
          message: "Invalid email",
        };
  }

  validate_Password(num) {
    if (this.#is_empty(this.#form.get("password"))) {
      return {
        Status: false,
        message: this.#input_empty_message,
      };
    }
    if (num !== 1) {
      return this.#verify_Pattern(
        this.#passwordRegix,
        this.#form.get("password")
      )
        ? {
            Status: true,
          }
        : {
            Status: false,
            message:
              "one uppercase, one lowercase, one digit, one special character",
          };
    }

    return true;
  }

  validate_ConfirmPassword() {
    if (this.#is_empty(this.#form.get("confirm_password"))) {
      return {
        Status: false,
        message: this.#input_empty_message,
      };
    }
    if (
      this.#form.get("confirm_password") !== this.#form.get("password      ")
    ) {
      return {
        Status: false,
        message: "Incorrect Password",
      };
    }
  }
}

export default Authentication;
