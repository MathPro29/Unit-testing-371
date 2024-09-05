// IndexPage.spec.js
import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบตัวแปรที่ชื่อว่า firstName', () => {
    const wrapper = shallowMount(IndexPage)
    const firstNameInput = wrapper.find('#firstName')
    expect(firstNameInput.element.value).toBe('เมธัส')
  }),

  it('ตรวจสอบตัวแปรที่ชื่อว่า lastname', () => {
    const wrapper = shallowMount(IndexPage)
    const lastNameInput = wrapper.find('#lastName')
    expect(lastNameInput.element.value).toBe('พรวิสุทธิ์')
  }),

  it('ตรวจสอบตัวแปรที่ชื่อว่า studentCode', () => {
    const wrapper = shallowMount(IndexPage)
    const studentCodeInput = wrapper.find('#studentCode')
    expect(studentCodeInput.element.value).toBe('6604101371')
  }),

  it('ตรวจสอบตัวแปรที่ชื่อว่า nickName', () => {
    const wrapper = shallowMount(IndexPage)
    const nickNameInput = wrapper.find('#nickName')
    expect(nickNameInput.element.value).toBe('เคน')
  })
});

  /*
  it('ตรวจสอบหัวข้อ (Title)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('วิวัฒนาการของโลกสมัยใหม่')
  });

  it('ตรวจสอบตัวแปรที่ชื่อว่า title', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'ฉันรักวิว'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ฉันรักวิว')
  })
    */
/*
test('ทดสอบว่ามี form ?', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('ทดสอบว่าในฟอร์ม form มีการรับค่า (input) ?', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('ทดสอบว่ามีปุ่ม (button) ?', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('button').exists()).toBe(true)
}) */

