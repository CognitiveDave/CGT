<template>
  <div>
    <div class="container">
        <div class="jumbotron" style="height: 208px;margin: 30px;">
            <h1>CGT</h1>
            <p>Do CGT here</p>
            <p><a class="btn btn-primary" role="button">CGT Rules</a></p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-5" style="border-radius: 1px;border: 2px none var(--info) ;">
                <blockquote class="blockquote">
                    <p class="mb-0" style="font-size: 21px;text-align: center;">Select the carry forward file</p>
                    <footer class="blockquote-footer" style="font-size: 12px;text-align: center;">Should be excel in correct format</footer>
                </blockquote><input type="file" style="text-align: center;border-style: none;">
            </div>
            <div class="col-sm-5" style="border: 2px none var(--info) ;">
                <blockquote class="blockquote">
                    <p class="mb-0" style="font-size: 21px;text-align: center;">Current year transactions</p>
                    <footer class="blockquote-footer" style="font-size: 12px;text-align: center;">Should be excel in correct format</footer>
                </blockquote><input type="file" style="text-align: center;">
            </div>
            <div class="col-sm-1"></div>
        </div>
        <div class="row">
            <div class="col">
                <h1>&nbsp;</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-5">
                <p>File Summary</p>
            </div>
            <div class="col-sm-4">
                <p>File Summary</p>
            </div>
            <div class="col-sm-1"></div>
        </div>
        <div class="row">
            <div class="col"></div>
            <router-link to="/process">
                <div class="col"><button class="btn btn-primary" type="button" style="text-align: center;">Process calculations</button></div>
            </router-link>
            <div class="col"></div>
        </div>
    </div>
    </div>
</template>


<script>
import users from './users.json'

export default {
  name: 'TableView',
  data: () => ({
    users,
    filters: {
      name: { value: '', keys: ['Email'] }
    }
  })
}
</script>


