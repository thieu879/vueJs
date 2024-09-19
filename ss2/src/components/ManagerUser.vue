<template>
    <div>
      <table style="width: 75%">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center">1</td>
            <td style="text-align: center">Thế Minh</td>
            <td style="text-align: center">23/12/2005</td>
            <td style="text-align: center">Nam</td>
            <td style="text-align: center">Hà Nội</td>
            <td style="text-align: center" class="button">
              <button class="btn-outline-dark">Dark</button>
              <button class="btn-danger">Danger</button>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">2</td>
            <td style="text-align: center">Minh Sâm</td>
            <td style="text-align: center">128/07/2006</td>
            <td style="text-align: center">Nữ</td>
            <td style="text-align: center">Hà Nội</td>
            <td style="text-align: center" class="button">
              <button class="btn-outline-dark">Dark</button>
              <button class="btn-danger">Danger</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  table {
    width: 100%;
  }
  
  table th,
  table td {
    text-align: center;
    vertical-align: middle;
  }
  
  /* Optional: Add some spacing and styling for buttons */
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
  
  /* Example button styles */
  .btn-outline-dark {
    background-color: transparent;
    border: 1px solid #343a40;
    color: #343a40;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: white;
    border: none;
  }
  
  .button {
    display: flex;
  }
  </style>