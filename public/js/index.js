const inputTodo = document.getElementById('input-todo'); // Inisialisasi id input-todo di html
const listTodo = document.getElementById('list-todo'); // Inisialisasi id list-todo di html

// Membuat fungsi yang dimana : 
// - Ketika form tidak diisi/tidak di-input, maka akan menampilkan alert:
//   Anda belum mengisi to-do list, silahkan isi terlebih dahulu!

// - Ketika form diisi, akan membuat element baru yang bernama ('li') dan ('span')

function addTask() {
    if(inputTodo.value === '') {
        alert("Anda belum mengisi to-do list, silahkan isi terlebih dahulu!");
    }
    else {
        let list = document.createElement('li');
        list.innerHTML = inputTodo.value; // 
        listTodo.appendChild(list);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputTodo.value = "";
    saveData();
}

// Menambahkan event listener untuk 'listTodo'
listTodo.addEventListener("click", (e) => {
    // Jika elemen yang di klik adalah 'li', tambahkan kelas 'checked'
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    // Jika elemen yang di klik adalah 'span', hapus elemen induk ('li') dari 'listTodo'
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Fungsi saveData() untuk menyimpan data ke dalam localStorage
function saveData() {
    localStorage.setItem("data", listTodo.innerHTML);
}

// Fungsi showTask() untuk menampilkan task yang telah disimpan pada localStorage
function showTask() {
    listTodo.innerHTML = localStorage.getItem("data");
}

// Menjalankan fungsi showTask() saat halaman dimuat
showTask()