import { ref } from 'vue'

const wishlistedIds = ref<number[]>([])

export const useWishlist = () => {
  const isWishlisted = (id: number) => wishlistedIds.value.includes(id)

  const toggleWishlist = (id: number) => {
    const idx = wishlistedIds.value.indexOf(id)
    if (idx > -1) {
      wishlistedIds.value.splice(idx, 1)
    } else {
      wishlistedIds.value.push(id)
    }
  }

  return {
    wishlistedIds,
    isWishlisted,
    toggleWishlist
  }
}
