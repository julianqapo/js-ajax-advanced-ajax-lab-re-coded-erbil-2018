
<script id="repository-template" type="text/x-handlebars-template">
  <ul>
   {{#each this}}
     <li>
       <h2><a href="{{html_url}}">{{name}}</a></h2>
       <section>
          <header><h4>Created By {{owner.login}}</h4></header>
          <img src="{{owner.avatar_url}}" height="32" width="32">
       </section>
       <p>Watchers: {{watchers_count}}</p>
       <p>Forks: {{forks_count}}</p>
       <p>Issues: {{open_issues_count}}</p>
     </li>
    {{/each}}
  </ul>
</script>

