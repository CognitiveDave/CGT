<template>
    <div>
<div class="container">
        <div class="jumbotron" style="height: 166px;margin: 15px;padding: 7px 32px;">
            <h1>CGT Reults</h1>
            <p>Based on input files and FIFO</p>
            <p><a class="btn btn-primary" role="button">Documentation</a></p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col"><div class="bootstrap_datatables">
<div class="container py-5">
  <header class="text-center text-black">
    <h1 class="display-4">CGT Results</h1>
  </header>
  <div class="row py-2">
    <div class="col-lg-10 mx-auto">
      <div class="card rounded shadow border-0">
        <div class="card-body p-5 bg-white rounded">
          <div class="table-responsive">
            <table id="example" style="width:90%" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Currency</th>
                  <th>Amount</th>
                  <th>Transaction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01-01-2021</td>
                  <td>45</td>
                  <td>12.35</td>
                  <td>EUR</td>
                  <td>5353.00</td>
                  <td>Buy</td>
                </tr>
                <tr>
                  <td>01-01-2021</td>
                  <td>30</td>
                  <td>15.00</td>
                  <td>EUR</td>
                  <td>4500.00</td>
                  <td>Sell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div></div>
            <div class="col-sm-1"></div>
        </div>
    </div>
    </div>
</template>


<script>
import users from './users.json'

export default {
  name: 'ProcessResults',
  data: () => ({
    users,
    filters: {
      name: { value: '', keys: ['Email'] }
    }
  })
}
</script>


