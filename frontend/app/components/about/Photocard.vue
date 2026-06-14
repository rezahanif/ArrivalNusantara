<!-- components/about/Photocard.vue
     "Image Bento Cluster" — large landscape photo with two smaller
     white-bordered photos overlapping its bottom-left corner.
-->
<template>
  <div class="relative w-full h-[400px]">
    <!-- Large background photo -->
    <div class="absolute inset-0 -top-4 rounded-3xl overflow-hidden">
      <img
        src="/images/aboutrightmain.webp"
        alt="Majestic mountain peak"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Small overlapping photo: hiker -->
    <div class="absolute left-[-26px] top-[170px] w-[145px] aspect-[110/192] rounded-2xl overflow-hidden border-[5px] border-white shadow-lg">
      <img
        src="/images/aboutrightrectangel.webp"
        alt="Hiker looking at mountains"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Small overlapping photo: coffee cherries -->
    <div class="absolute left-[114px] top-[225px] w-[180px] aspect-[179/192] rounded-2xl overflow-hidden border-[5px] border-white shadow-lg">
      <img
        src="/images/aboutrightsquare.webp"
        alt="Hands holding coffee cherries"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>