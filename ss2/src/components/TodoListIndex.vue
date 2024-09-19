<template>
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card shadow-lg">
              <div class="card-body p-5">
                <h3 class="text-center mb-4">Quản lý công việc</h3>
                <form
                  class="d-flex justify-content-center align-items-center mb-4"
                >
                  <div class="form-outline flex-fill">
                    <input
                      type="text"
                      id="form2"
                      class="form-control"
                      placeholder="Thêm công việc"
                    />
                  </div>
                  <button type="submit" class="btn btn-info ms-2">Thêm</button>
                </form>
  
                <ul class="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" href="#">Tất cả công việc</a>
                  </li>
                </ul>
  
                <div class="tab-content">
                  <div class="tab-pane fade show active">
                    <ul class="list-group mb-0">
                      <li
                        class="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between bg-light"
                      >
                        <div>
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            checked
                          />
                          <s>Cras justo odio</s>
                        </div>
                        <div>
                          <a
                            href="#!"
                            class="text-info me-2"
                            title="Sửa công việc"
                          >
                            <i class="fas fa-pencil-alt"></i>
                          </a>
                          <a href="#!" class="text-danger" title="Xóa công việc">
                            <i class="fas fa-trash-alt"></i>
                          </a>
                        </div>
                      </li>
                      <li
                        class="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between bg-light"
                      >
                        <div>
                          <input class="form-check-input me-2" type="checkbox" />
                          Cras justo odio
                        </div>
                        <div>
                          <a
                            href="#!"
                            class="text-info me-2"
                            title="Sửa công việc"
                          >
                            <i class="fas fa-pencil-alt"></i>
                          </a>
                          <a href="#!" class="text-danger" title="Xóa công việc">
                            <i class="fas fa-trash-alt"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  </script>
  
  <style>
  .gradient-custom {
    background: linear-gradient(
      90deg,
      rgba(58, 123, 213, 1) 0%,
      rgba(58, 213, 170, 1) 100%
    );
  }
  
  .card {
    border-radius: 1rem;
  }
  
  .card-body {
    padding: 2rem;
  }
  
  .btn-info {
    background-color: #36b9cc;
    border-color: #36b9cc;
    color: #fff;
  }
  
  .btn-info:hover {
    background-color: #2a96a5;
    border-color: #2a96a5;
  }
  
  .list-group-item {
    background-color: #f8f9fa;
  }
  
  .list-group-item:hover {
    background-color: #e2e6ea;
  }
  
  .form-control {
    border-radius: 0.5rem;
  }
  
  .form-label {
    color: #495057;
  }
  
  .text-info {
    color: #36b9cc !important;
  }
  
  .text-danger {
    color: #e74a3b !important;
  }
  </style>