<template>
  <header class="header">
    <div class="title">
      <div class="center-children">
        <img class="rounded" :src="`${baseUrl}me.png`" alt="Benji Steenhoek" />
      </div>
      <h1>Benji Steenhoek</h1>
      <div class="divider" />
      <h3>Software Developer</h3>
    </div>
    <div class="links">
      <h2>Links</h2>
      <ul>
        <li>
          <router-link to="/">Homepage</router-link>
        </li>
        <!-- Not finished yet -->
        <!-- <li>
          <router-link to="/projects">Projects</router-link>
        </li> -->
      </ul>
    </div>
    <div class="contacts main">
      <h2>Contact Info</h2>
      <ul>
        <li>
          <a target="_blank" href="mailto:benjaminjsteenhoek@gmail.com">
            <i class="fas fa-envelope-square"></i>
            benjaminjsteenhoek@gmail.com
          </a>
        </li>
        <li>
          <a target="_blank" href="tel:515-580-5789">
            <i class="fas fa-phone-square"></i>
            515-480-5789
          </a>
        </li>
        <li>
          <a target="_blank" href="http://linkedin.com/in/ben-steenhoek">
            <i class="fab fa-linkedin"></i>
            linkedin.com/in/ben-steenhoek
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
const Header = {
  name: "Header",
  data: function() {
    return {
      baseUrl: process.env.BASE_URL
    };
  }
};

export default Header;
</script>

<style lang="less">
.header {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;

  a,
  :visited {
    color: black;
    text-decoration: none;
  }
  > div {
    flex: 0 0 auto;
  }
  .links {
    flex: 1 1 auto;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      border-radius: 5px;
      border: 1px solid black;
      padding: 0;
      box-shadow: 3px 3px black;
      &:hover {
        transform: scale(1.02);
      }
      &:not(:first-child) {
        margin-top: 6px;
      }
      a {
        display: block;
        padding: 10px;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
      i {
        padding-right: 10px;
      }
    }
  }
  img {
    width: 200px;
    height: 200px;
  }
  .contacts.main {
    display: block;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
