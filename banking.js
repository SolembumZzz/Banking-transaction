class Customer {
    constructor(id, fullname, email, phone, address, balance) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.balance = balance;
    }
}

var customers = [];

const customerData = "customerData";

function init() {
    if (getLocalStorage(customerData) == null) {
        customers = [
            new Customer(1, "Han Nguyen", "hannguyen7796@gmail.com", "0924018513", "Da Nang"),
            new Customer(2, "Johnson", "json@gmail.com", "0935670606", "Virginia"),
            new Customer(3, "Obama", "barrackomama@gmail.com", "0915438794", "California"),
            new Customer(4, "Donald Trump", "mcdonald@gmail.com", "0915770407", "Washington")
        ]
        setLocalStorage(customerData, customers);
    }
    else {
        customers = getLocalStorage(customerData);
    }
}

function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function renderCustomers() {
    let htmls = customers.map(function(customer) {
        return `
                <tr>
                    <td>${customer.id}</td>
                    <td>${customer.fullname}</td>
                    <td>${customer.email}</td>
                    <td>${customer.phone}</td>
                    <td>${customer.address}</td>
                    <td>${customer.balance}</td>
                    <td>
                        <a class="btn btn-outline-secondary" title="Edit" href="">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                    </td>
                    <td>
                        <a class="btn btn-outline-success" title="Deposit" href="">
                            <i class="fa-solid fa-plus"></i>
                        </a>
                    </td>
                    <td>
                        <a class="btn btn-outline-warning" title="Withdraw" href="">
                            <i class="fa-solid fa-minus"></i>
                        </a>
                    </td>
                    <td>
                        <a class="btn btn-outline-primary" title="Transfer" href="">
                            <i class="fa-solid fa-arrow-right-arrow-left"></i>
                        </a>
                    </td>
                    <td>
                        <a class="btn btn-outline-danger" title="Suspend" href="">
                            <i class="fa-solid fa-ban"></i>
                        </a>
                    </td>
                </tr>`
    })
    document.getElementById("customerList").innerHTML = htmls.join('');
}

function addNewCustomer() {
    let id = getNewId();
    let fullname;
    let email;
    let phone;
    let address;

    
}

function getNewId() {
    let sortedList = [...customers].sort(function (a, b) {return b.id - a.id})
    return sortedList[0] + 1;
}


(function () {
    init();
})()