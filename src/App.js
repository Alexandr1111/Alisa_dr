import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AnimatedInvitation.css'; // Импортируем CSS-файл для стилей
import audioFile from './assets/applause6.mp3';

const AnimatedInvitation = () => {
  const message = "Алиска😊 Разреши тебя отхэппибёздить😛 \n" +
      "\n" +
      "Передай родителям большое спасибо что воспитали такую уникальную девушку-предельно милую и душевную в 1 флаконе!🤗\n" +
      "\n" +
      "Честно, глядя на тебя очень тяжело не улыбаться и так и хочется причинить тебе доброту, любовь и заботу❤️🥰😘!!! \n" +
      "\n" +
      "Я рад что встретил тебя, а вот желать не хочу я ничего тебе 😂 Знаешь, мне достаточно чтобы ты просто была сама собой, Алис😌 С днем рождения!!!🎉🎂🎁🎈";
  const [displayedText, setDisplayedText] = useState('');

  // Звуковой эффект
  const audio = new Audio(audioFile); // Укажите путь к вашему звуковому файлу

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      setDisplayedText((prev) => prev + message.charAt(i));
      i++;
      if (i === message.length) {
        clearInterval(typingEffect);
      }
    }, 150);
    return () => clearInterval(typingEffect);
  }, []);

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }} // Центрируем текст
      >
        <h1>{displayedText}</h1>
      </motion.div>
  );
};

export default AnimatedInvitation;