import React from 'react'
import Message from "./Message";

const messageData = {
  avatar: 'http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg',
  name: 'Димыч',
  message: 'Ctrl + Alt + L не забывайте нажимать чтоб красивый код был (это увеличивает скорость обучения и чтения кода и облегчает поиск ошибок и понимание "что тут происходит")\n',
  time: '22:00',
}

function HW1() {
  return (
    <div>
      <h3>homeworks 1</h3>
      {/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
    </div>
  )
}

export default HW1
