document.addEventListener('DOMContentLoaded', function () {
    // Function to update the total price and total quantity
    function updateTotal() {
        let total = 0;
        let totalQuantity = 0;
        const products = document.querySelectorAll('.card-body');
        products.forEach(product => {
            const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace(' $', ''));
            const quantity = parseInt(product.querySelector('.quantity').textContent);
            total += unitPrice * quantity;
            totalQuantity += quantity;
        });
        document.querySelector('.total').textContent = `${total.toFixed()} $`;
        document.querySelector('.total-quantity').textContent = totalQuantity;
    }

    // Function to increment quantity
    function incrementQuantity(event) {
        const quantityElement = event.target.parentElement.querySelector('.quantity');
        let currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;
        updateTotal();
    }

    // Function to decrement quantity
    function decrementQuantity(event) {
        const quantityElement = event.target.parentElement.querySelector('.quantity');
        let currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 0) {
            quantityElement.textContent = currentQuantity - 1;
            updateTotal();
        }
    }

    // Function to delete an item
    function deleteItem(event) {
        const productCard = event.target.closest('.card-body');
        productCard.remove();
        updateTotal();
    }

    // Function to toggle like
    function toggleLike(event) {
        event.target.classList.toggle('liked');
    }

    // Attach event listeners to all relevant buttons
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
        button.addEventListener('click', incrementQuantity);
    });

    document.querySelectorAll('.fa-minus-circle').forEach(button => {
        button.addEventListener('click', decrementQuantity);
    });

    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', deleteItem);
    });

    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', toggleLike);
    });

    // Initialize total values
    updateTotal();
});
