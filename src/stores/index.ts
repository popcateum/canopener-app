import {writable, readable} from 'svelte/store'

export const isConnect:any = writable(false)
export const myAddress:any = writable('0x0000...0000')
export const myBalance:any = writable(0)
export const myTokenId:any = writable(null)