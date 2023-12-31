import { Heading } from '@/components/Heading'
import Image from 'next/image'

export function Firefighting() {
  const first =
    'https://ik.imagekit.io/ATG/image_2023-07-15_09-30-37.png?updatedAt=1689395470547'
  const second =
    'https://ik.imagekit.io/ATG/image_2023-07-15_09-35-53.png?updatedAt=1689395787964'
  const third =
    'https://ik.imagekit.io/ATG/image_2023-07-15_09-35-28.png?updatedAt=1689395897310'
  const fouth =
    'https://ik.imagekit.io/ATG/image_2023-07-15_09-36-27.png?updatedAt=1689395999000'
  return (
    <>
      <div className="my-16 xl:max-w-none">
        <Heading level={2} id="firefighting"></Heading>
        {/* <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
      <p>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam.</p>
        </div> */}
        <p>
          В целях обеспечения безопасности здоровья людей и технологических
          процессов, при возникновении пожара на станциях внедрена и установлена
          система пожаротушения.Это система представляют собой комплекс
          технических и технологических средств, предназначенных для локализации
          пожара посредством выпуска веществ для тушения огня.
        </p>
        <p>К систему пожаротушения входит нижеследующие подсистемы:</p>
        <ol>
          <li> Водяная система пожаротушения</li>
          <li> Система автоматического управления извещателей.</li>
          <li> Порошковая система пожаротушения «Буран-50».</li>
          <li> Углекислотная система пожаротушения ГПА.</li>
        </ol>

        <h3>1. Водяная система пожаротушения станции:</h3>
        <p>
          {' '}
          2 пожарный водоём по 500 куб метр, 2 пожарный насосов (1 рабочий, 1
          резервный), 2 подпиточный насосов (1 рабочий, 1 резервный) для
          стабилизации давления воды в системе. Давления воды в системе держится
          0.2-0.4 Мпа. Вода подведена к пожарным гидрантам, лафетным стволам,
          пожарным кранам внутри компрессорных цехов и другим помещениям
        </p>

        <h3>Управление противопожарной системой: </h3>
        <p>
          Для обеспечения стабильной давлении в системе управление производится
          автоматически на SCADA, так и в ручную на месте. При падении давления
          в трубах ниже 0.2 МПа включается основной подпиточный насос и
          поднимает до 0,4, если основной насос не включится при 0,15 МПа
          включится резервный подпиточный насос.Пожарные водоемы снабжены
          мерными линейками для контроля уровня воды. Высокий аларм 2700мм,
          низкий аларм 2000 мм по SCADA.
        </p>

        <Image alt="image" src={first} width={1080} height={548} />

        <h3>2. Система автоматического управления извещателей.</h3>
        <p>
          Для получения информации о тревожной ситуации на объекте в состав
          пожарной сигнализации входят извещатели, отличающиеся друг от друга
          типом контролируемого физического параметра, принципом действия
          чувствительного элемента, способом передачи информации на
          шит-контроллер управления сигнализацией. По объектам KC1 установлены
          тепловые и дымовые датчики, а также пожарные рычаги. Раз в пол года
          проводится профилактическая проверка тепловых и дымовых датчиков на
          работоспособность.
        </p>
        <Image alt="image" src={second} width={1080} height={548} />

        <h3>3. Порошковая система пожаротушения «Буран-50».</h3>
        <p>
          Модуль «Буран-50» порошкового пожаротушения предназначен для тушения
          огнетушащими порошками пожаров и загораний классов А, В, С, E. Один
          или несколько модулей (баллонов) могут использоваться как для защиты
          отдельного пожароопасного объекта, так и всей площади или объема
          помещения. Следует знать о том что: При срабатывании пожаротушения в
          автоматическом режиме интервал времени от момента срабатывания
          сигнализации до начала выброса тушащего порошка составляет 30 секунд,
          это время дается для эвакуации персонала. А при в ручном запуске
          пожаротушения интервал времени с момента подачи сигнала до начала
          тушения составляет 15 секунд. Нужно отметить что для эффективности
          пожаротушения двери должны быть в закрытом положении.
        </p>
        <Image alt="image" src={third} width={1080} height={548} />
        <h3>4. Углекислотная система пожаротушения ГПА.</h3>
        <p>
          Дым и пламя в корпусе компрессорного агрегата обнаруживается с помощью
          датчиков пламени и термочувствительными датчиками. При обнаружении
          пламени или повышения температуры до определенного значения
          автоматически срабатывает углекислотная система пожаротушения. При
          срабатывание 2х(включительно) и более датчиков пламени и
          термочувствительных датчиков, происходит распыл углекислоты. Принцип
          работы системы и последовательность сробатывания. Углекислотная
          система пожаротушения работает под ручным управлением и автоматически
        </p>
        <Image alt="image" src={fouth} width={1080} height={548} />
      </div>
    </>
  )
}
