using System;
using System.Text;

namespace LifeSpot
{
    public class Logger
    {
        /// <summary>
        /// Этот метод в качестве параметра получает ссылку на делегат Action, с помощью которого можно вызвать разные методы внутри
        /// </summary>
        /// <param name="logMode"></param>
        public static void PrintMessage(Action logMode)
        {
            Console.OutputEncoding = Encoding.Unicode;
            //Запускаем логирование
            Console.WriteLine("Логгер запущен");
            //Вызываем делегат
            logMode.Invoke();
        }

        //Вывод информационных сообщений
        public static void Info(string message)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(message);
            Console.ResetColor();
        }

        //Вывод предупреждений
        public static void Warning(string message)
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine(message);
            Console.ResetColor();
        }

        //Вывод сообщений об ошибках
        public static void Error(string message)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(message);
            Console.ResetColor();
        }
    }
}
