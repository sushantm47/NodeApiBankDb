### Create user

    URL

    http://localhost:8080/api/customer/create

    BODY

    {
        "name": "dobby"
    }

### Getting user details

    http://localhost:8080/api/customer/user/5ea06351a6cce559114a99fa

### Deposit amount

    URL

    http://localhost:8080/api/customer/transaction?type=DPST&id=5ea06351a6cce559114a99fa
    BODY

    {
        "amount":700
    }

### Withdrawl amount

    URL

    http://localhost:8080/api/customer/transaction?type=WDRL&id=5ea06351a6cce559114a99fa

    BODY

    {
        "amount":500
    }


