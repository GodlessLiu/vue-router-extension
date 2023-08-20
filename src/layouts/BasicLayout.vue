<template>
  <div class="app h-screen flex flex-row">
    <div class="menu w-64 h-full overscroll-y-auto"></div>
    <div class="content flex-1 h-full overflow-y-auto">
      <RouterView></RouterView>
    </div>
  </div>
</template>
