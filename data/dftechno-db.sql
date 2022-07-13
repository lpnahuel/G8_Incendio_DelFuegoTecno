-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: dftechno-db
-- ------------------------------------------------------
-- Server version	8.0.29

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int NOT NULL,
  `stock` int DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `specs` varchar(1000) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `image_01` varchar(100) NOT NULL,
  `image_02` varchar(100) DEFAULT NULL,
  `image_03` varchar(100) DEFAULT NULL,
  `image_04` varchar(100) DEFAULT NULL,
  `thumb` varchar(200) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`category_id`),
  KEY `fk_Products_Category1_idx` (`category_id`),
  CONSTRAINT `fk_Products_Category1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `city` varchar(100) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `birth` date NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `cp` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(60) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`,`role_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_Users_Roles1_idx` (`role_id`),
  CONSTRAINT `fk_Users_Roles1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES (1,1,'Notebook Gamer Asus Rog Zephyrus Duo Ryzen 9 16Gb 1Tb Rtx 3060EDit',580000,10,'Asus Rog Zephyrus Duo 15 SE (Gx551Qm-Es96)','Amd Ryzen 9 5980Hx Processor (3.3Ghz - 4.8Ghz) Processor, 15.6\' 300Hz (3Ms) Ips-Level Full Hd (1920 X 1080) 100% Srgb Display, 16Gb (2X 8Gb) Ddr4 3200Mhz Memory, 1Tb Pcie Nvme Ssd, Nvidia Geforce Rtx 3060 Max Performance (6Gb) Gddr6 Graphics Card W/ Rog Boost, Microsoft Windows 10 Home, Intel Wi-Fi 6 (802.11Ax), Bluetooth 5.1, Hdmi 2.0B, Usb 3.2 Type C (Gen 2), 3X Usb 3.2 Type A (Gen 2), Backlit Chiclet Per-Key Rgb Keyboard','Asus','asus-zephyrus-duo_15-GX550LXS-001.webp','asus-zephyrus-duo_15-GX550LXS-002.webp','','','thumb-asus-zephyrus-duo_15-GX550LXS-001.webp','2022-07-12 21:12:53','2022-07-12 21:12:53'),
(2,1,'Notebook Gamer Hp Omen 15-Dc1020Nr',335000,5,'Processor: 11th Gen Intel® Core™ i7-11800H (8-Core), Memory: 16 GB DDR4-3200 SDRAM, Hard Drive: 1 TB PCIe® NVMe™ M.2 SSD, Display: 15.6\' IPS Micro-Edge Anti-Glare FHD (1920 x 1080) 300-Nits 144Hz Display. Integrated 10/100/1000 GbE LAN, Intel® Wi-Fi 6 AX 201 (2x2) and Bluetooth® 5 Combo, 1 USB 3.1 Gen 2 Type-C™ with Thunderbolt™ 3, Audio by Bang & Olufsen; DTS:X® Ultra; OMEN Audio Control Support DTS:X® Ultra; Dual speakers; HP Audio Boost 2.0','Video Card: NVIDIA® GeForce RTX™ 3070 Graphics, 8GB. Windows 11 Home x 64 bits, preinstalado.. Peso 2.45Kg. - HP Wide Vision 720p HD Webcam with Integrated Dual Array Digital Microphones','HP','hp-omen-1020-001.webp','hp-omen-1020-002.webp','hp-omen-1020-003.webp','','thumb-hp-omen-1020-001.webp','2022-07-12 21:16:55','2022-07-12 21:16:55'),
(3,1,'Notebook Gamer Acer Nitro I5 10Ma 8Gb Ssd256 Gtx1650',144000,12,'Procesador Intel Core i5 11-400H. Pantalla 15.6\' FHD IPS 144Hz. Resolución 1920 x 1080 (Full HD). Gráficos Placa de video dedicada Nvidia Geforce GTX 1650 4GB DDR6. Memoria 8GB DDR4 3200 (ampliable hasta 64GB). Disco 256 GB SSD. Ampliaciones de disco SSD M.2 hasta 2TB / SSD o HDD 2.5\' hasta 2TB. Conectividad inalámbrica Wi-Fi 802.11AX + Bluetooth. Sistema operativo Windows 11 Home en inglés configurable en español. Teclado retroiluminado en inglés configurable español. Puertos 1 Ethernet, 1 HDMI, 4 USB ( 3 USB 3.2 y 1 Type C).. Cámara frontal 720dpi. Sonido 5.1. Garantía XTR Directo 6 meses','Notebook Acer Nitro I5 11Va 8Gb 256Ssd Geforce Gtx1650 W11. Modelo An515-57-536Q. Parte Nh.Qekaa.001','Asus','acer-nitro-i5-001.webp','','','','thumb-acer-nitro-i5-001.webp','2022-07-12 21:18:31','2022-07-12 21:18:31'),
(4,1,'Notebook Gamer Dell Alienware 17 R5 17.3',508890,3,'Notebook Dell Alienware M15R5 Extreme Gaming / Modelo Awm15R5 / Pantalla 15.6” Full Hd ( 1920 X 1080 ) 360Hz / Procesador Amd Ryzen 9 5900Hx 8 Cores 4.6Ghz / Capacidad Disco Estado Sólido 1Tb ( 1000 Gigas ) / Memoria Ram 16Gb Máxima Velocidad Y Frecuencia / Placa Gráfica Dedicada Nvidia Geforce Rtx 3070 Súper Max Q 8Gb Dedicados / Windows 11 / Dark Side Of The Moon','8ª generación Intel Core i7-8750H (6 núcleos, 9 MB de caché, hasta 4. 1 GHz con Turbo Boost). 17. 3 pulgadas FHD (1920 x 1080) 60 Hz IPS antirreflejos 300-nits | NVIDIA GeForce GTX 1070 con 8 GB GDDR5. 16 GB, DDR4, 2400 MHz. Unidad de estado sólido de 256 GB + disco duro de 1 TB 7200 rpm. Batería de iones de litio (99 Why) | Windows 10 Home','Dell','alienware-17-r5-001.webp','','','','thumb-alienware-17-r5-001.webp','2022-07-12 21:17:28','2022-07-12 21:17:28'),
(5,1,'Notebook Gamer Nsx Kairos I5 16G Ssd250 W10P+O',159533,5,'La notebook ULTRASLIM cuenta con un diseño compacto y funcional. Posee los nuevos procesadores Intel® CoreTM i5 de 10a generación, que junto a SSD puedes experimentar una mejora monumental en las velocidades de lectura / escritura, ideal para tareas que requieren multiples procesos. Con un chasis sólido y liviano, su acabado metálico de primera calidad llama la atención y se destaca entre la multitud.','Marca: NSX. Línea: Kairos. Resolución de la pantalla: 1920 px x 1080 px. Con pantalla táctil: No. Tipo de resolución: Full HD. Tamaño de la pantalla: 14 \'. Con Wi-Fi: Sí. Peso: 1.5 kg. Memoria RAM: 16 GB. Tipo de memoria RAM: DDR4. Capacidad del SSD: 250 GB. Marca del procesador: Intel. Línea del procesador: Core i5. Cantidad de núcleos: 2. Nombre del sistema operativo: FreeDOS. Tipo de batería: Ion de litio. Es gamer: No','Kairos','NOTEBOOK-NSX-KAIROS-I5-16G-SSD250-W10PO-001.webp','','','','thumb-NOTEBOOK-NSX-KAIROS-I5-16G-SSD250-W10PO-001.webp','2022-07-12 21:17:31','2022-07-12 21:17:31'),
(6,1,'Notebook Gamer Gigabyte AORUS RTX 3080Q',483340,16,'En el corazón de AORUS 15P se encuentra un procesador Intel Core i7 de 2,3 GHz con 8 núcleos, 16 subprocesos y una frecuencia turbo máxima de 4,6 GHz, que le brinda la potencia de alto octanaje que necesita, ya sea que esté jugando o editando. Con 32 GB de RAM DDR4 de 3200 MHz, puede realizar múltiples tareas de manera eficiente y reproducir sus videos rápidamente. Almacene su biblioteca digital de juegos con una unidad de estado sólido M.2 NVMe PCIe 4.0 de 1 TB, lo que mejora el rendimiento del sistema y permite que sus aplicaciones se ejecuten más rápido. Experimente un rendimiento gráfico mejorado con la GPU NVIDIA GeForce RTX 3080, que le brinda 8 GB de GDDR6 VRAM junto con un conjunto de tecnologías NVIDIA Max-Q que optimizan su sistema para obtener imágenes fluidas al diseñar y jugar.','Procesador: Intel Core i7-11800H (11.ª generación). UPC: 2,3 a 4,6 GHz 8 núcleos. Caché L3: 24 MB. Tipo de gráficos: Dedicado. GPU: NVIDIA GeForce RTX 3080 con 8 GB GDDR6 VRAM. Tipo de memoria: DDR4 de 3200 MHz. Memoria total instalada: 32GB. Configuración de memoria: 2 x 16 GB. Capacidad máxima de memoria: 64GB. Tipo de ranura de memoria: DIMM SO de 260 pines','Gigabyte','Notebook-Gigabyte-AORUS-RTX-3080Q-001.webp','','','','thumb-Notebook-Gigabyte-AORUS-RTX-3080Q-001.webp','2022-07-12 21:23:25','2022-07-12 21:23:25'),
(7,1,'Notebook Gamer MSI GL66 Pulse 11UEK-801AR',483340,18,'CPU: Intel Core I7 11800H. ODD: NO. Bateria: 11.4V 53.5Wh 3 Cells. VGA. GeForce RTX3060/6GB Gddr6. Hdd: 512 GB SSD. Led Panel: 15:6 FHD anti-Glare IPS 144Hz. RAM: DDR4 16GB (8x2). RF: WLAN+BT. OS: Windows 11 64Bit Home. Color: Grey/Black. Keyboard: Spanish','','MSI','MSI-NOTEBOOK-GAMER-GL66-PULSE-11UEK801AR-001.webp','','','','thumb-MSI-NOTEBOOK-GAMER-GL66-PULSE-11UEK801AR-001.webp','2022-07-12 21:23:39','2022-07-12 21:23:39'),
(8,2,'Mouse Steelseries Rival 650 Wireless',25000,22,'Mouse SteelSeries Rival 650 Wireless Rendimiento sin retrasos de Quantum Wireless. Duración de la batería de más de 24 horas con carga rápida. Sensor óptico exclusivo TrueMove3 + 12.000 CPI, 350 IPS. La distancia de despegue más baja y precisa del mundo. 256 configuraciones de ajuste de peso del centro de gravedad. Interruptores mecánicos de disparador dividido de 60 millones de clics. Agarres laterales de silicona para mayor agarre y durabilidad. Iluminación RGB de 8 zonas con notificaciones Discord. Guarde la configuración del sensor, las macros y los efectos de iluminación a bordo. Personalización total con SteelSeries Engine','Sensor óptico exclusivo TrueMove3 + 12.000 CPI, 350 IPS Características Interruptores mecánicos de disparador dividido de 60 millones de clics Agarres laterales de silicona para mayor agarre y durabilidad. Iluminación RGB de 8 zonas con notificaciones Discord Personalización total con SteelSeries. Duración de la batería de más de 24 horas con carga rápida','Steelseries','steelseries-rival650-001.webp','steelseries-rival650-002.webp','steelseries-rival650-003.webp','steelseries-rival650-004.webp','thumb-steelseries-rival650-001.webp','2022-07-12 21:24:00','2022-07-12 21:24:00'),
(9,6,'Gabinete Kolink Inspire K20 Vidrio Templado 1X120Mm',8499,32,'Panel frontal acentuado en fibra de carbono con un acabado de tiras ARGB en forma de X multiangulares. Ventilador trasero de 120 mm preinstalado con iluminación RGB direccionable digitalmente. Opción de sincronización con el software de la placa base de serie. Panel lateral de cristal templado para una visión sin obstáculos del interior. Diseñada para placas base ATX/Micro-ATX-/Mini-ITX. Admite radiadores de hasta 240 mm en la parte delantera y 120 mm en la trasera. Panel de E/S con 1x USB3.0 y 2x USB2.0, audio HD y botón RGB. Soporta tarjetas gráficas de hasta 310mm, refrigeradores de CPU de hasta 160mm, fuentes de alimentación de hasta 180mm','Basada en la popular Inspire K3 ARGB, la Inspire K20 viene en un factor de forma ATX y añade un ventilador ARGB trasero de 120mm. Con un atractivo diseño del panel frontal que presenta una tira ARGB en forma de X multiangular con acento de fibra de carbono, la Inspire K20 Midi-Tower es otra excelente adición al sector de precio/rendimiento.','Kolink','kolink-inspire-k20-001.webp','kolink-inspire-k20-002.webp','kolink-inspire-k20-003.webp','kolink-inspire-k20-004.webp','thumb-kolink-inspire-k20-001.webp','2022-07-12 21:25:24','2022-07-12 21:25:24'),
(10,6,'Placa De Video Gigabyte Radeon Rx 5700 Xt 8G Ddr6 Gaming Oc',1050252,40,'','','Gigabyte','PLACA-DE-VIDEO-GIGABYTE-RADEON-RX-5700-XT-8G-DDR6-GAMING-OC-001.webp','','','','thumb-PLACA-DE-VIDEO-GIGABYTE-RADEON-RX-5700-XT-8G-DDR6-GAMING-OC-001.webp','2022-07-12 21:23:47','2022-07-12 21:23:47'),
(11,2,'Teclado Gamer Razer Blackwidow V3 Mini Mecánico Inalambrico 65%',18120,26,'Hablar de Razer dentro del mundo gamer es palabra mayor. Esta compañía ofrece productos de muy alta calidad a sus usuarios. Su línea de teclados es reconocida por haber recibido distintos galardones y premios internacionales por su alto desempeño.. Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.. Diseñado con tecnología optomecánica, su ciclo de vida es más extendido que otros dispositivos estándar. A diferencia de estos, los interruptores opto-mecánicos tienen una media de 100 millones de pulsaciones contra 70 millones de sus predecesores. ¡Preparate para tenerlo por muchos años!. Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.','Marca: Razer. Línea: Huntsman. Modelo: Huntsman Mini. Color del teclado: Negro. Color de la retroiluminación: RGB. Layout: QWERTY. Tipo de switch: Razer Purple. Es resistente a salpicaduras: Sí. Con cable removible: Sí. Con reposa muñeca: No. Con touchpad: No. Con pad numérico: No. Con trackball: No. Arquitectura: Opto-Mecánico. Es gamer: Sí. Con retroiluminación: Sí. Con pantalla: No. nIncluye pilas: No. Es para una mano: No. Tipo de conector: USB-C. Con recepción inalámbrica: Sí. Con interfaz USB: No. Con Bluetooth: No. Forma de las teclas: Cilíndrica. Con teclas de acceso rápido: Sí. Con teclas anti-ghost: Sí','Razer','razer-blackwidow-mini-v3-001.webp','','','','thumb-razer-blackwidow-mini-v3-001.webp','2022-07-12 21:26:32','2022-07-12 21:26:32'),
(12,6,'Gabinete Sentey P20',9260,50,'GABINETE. Modelo: P20. Part Number: P20-SF. ESTRUCTURA. Tipo: ATX. Color: Negro. Material: Metal. Motherboard Compatibles: ATX, Micro ATX, MINI ITX. Posición PSU: Abajo. Soporte Watercooling: Si. Motherboard Tray: Si. Sistema cables ocultos: Si. SISTEMA DE COOLERS. Cooler frontal: No. Cooler lateral: No. Cooler lateral p. CPU: No. Cooler superior: No. Cooler inferior: No. Cooler trasero: No. Cooler HDD: No','EXTERIOR. Color: Negro. Frente: Negro RGB. Patas: Si. Panel Lateral: Transparente. Topcover: Si. Display LCD: No. Tornillos manuales: Si. EXPANSIONES. Bahias ext 5.25\': No. Bahias ext 3.5\': No. Bahias int 3.5”: Si. Bahias int 2.5\': Si. Expansion Slot PCI: Si. PUERTOS FRONTALES. USB 3.0: Si. USB 2.0: Si. Audio Frontal: Si. E-sata: No. Sata Nativo: No. Card Reader: No. Controlador velocidad cooler: No','Sentey','gabinete-sentey-p20-001.webp','','','','thumb-gabinete-sentey-p20-001.webp','2022-07-12 21:26:35','2022-07-12 21:26:35'),
(13,6,'Cooler Mf120 Halo',4370,45,'Serie: Masterfan. Tipo De Enfriador: Ventilador De Gabinete. Perfil De Ventilador: Rgb Direccionable. Ventilador - Iluminación Led: Argb. Tamaño Del Ventilador: 120 Mm. Velocidad Del Ventilador: 650-1800 Rpm ± 10%. Flujo De Aire Del Ventilador: 47,2 Cfm ± 10%. Presión De Aire Del Ventilador: 1,6 Mmh2O ± 10%. Nivel De Ruido Del Ventilador: 6 - 30 Dba. Dimensiones Del Ventilador (L X W X H): 120 X 120 X 25 Mm. Fan Mttf: 160.000 Horas. Tipo De Rodamiento Del Ventilador: Cojinete De Rifle. Conector De Alimentación Del Ventilador: 4 Pines (Pwm). Voltaje Nominal Del Ventilador: 12Vdc','','Halo','Cooler-MF120-HALO-001.webp','','','','thumb-Cooler-MF120-HALO-001.webp','2022-07-12 21:26:38','2022-07-12 21:26:38'),
(14,6,'Placa De Video Amd Rx 580 8Gb Powercolor Red Devil',119340,124,'Se basa en la última arquitectura GCN 4 de AMD diseñada para GloFo 14nm FinFET que ofrece capacidad de realidad virtual superior, mayor nivel de rendimiento, realidad virtual fluida, soporte perfecto para monitores de juegos de próxima generación y transmisión o grabación de juegos sin CPU.. Intuitivo. Inmersivo. Interactivo. La innovadora tecnología LiquidVR de AMD permite experiencias de realidad virtual increíblemente ricas y envolventes al simplificar la creación de contenido de realidad virtual, desbloqueando muchas características de hardware únicas de AMD diseñadas para funcionar a la perfección con auriculares en tarjetas gráficas Radeon compatibles. LiquidVR se dedica a hacer que las experiencias de realidad virtual sean realmente inmersivas al crear una sensación de \'presencia\', un estado de conciencia en el que un mundo virtual parece tan real que creerá que está allí.','Unidades de cómputo: 36. Frecuencia base: 1257 MHz. Frecuencia de aumento: Hasta 1340 MHz. Velocidad máx. de relleno de píxel: Hasta 42.88 GP/s. Velocidad máx. de relleno de textura: Hasta 192.96 GT/s. Rendimiento máx.: Hasta 6.2 TFLOPs. ROP: 32. Procesadores de transmisión: 2304. Unidades de textura: 144. Recuento de transistores: 5.7 B. Potencia típica de la placa (escritorio): 185 W. Recomendación de PSU: 500 W. Velocidad de memoria (efectiva): 8 Gbps. Tamaño de memoria máx.: 8 GB. Tipo de memoria: GDDR5. Interfaz de memoria: 256-bit. Ancho de banda de memoria máx.: Hasta 256 GB/s','Amd','PLACA-DE-VIDEO-AMD-RX-580-8GB-POWERCOLOR-RED-DEVIL-001.webp','','','','thumb-PLACA-DE-VIDEO-AMD-RX-580-8GB-POWERCOLOR-RED-DEVIL-001.webp','2022-07-12 21:27:36','2022-07-12 21:27:36'),
(15,5,'Silla Gamer Thunderx3 Tc3 Jet Black (By Aerocool)',62730,15,'Modelo: TC3. Peso máximo: 150 kg / 330 libras. Peso recomendado: 125 kg / 275 libras. Tipo de espuma: Espuma de alta densidad. Tipo de marco: Acero. Apoyabrazos regulables: Si, bidireccional. Respaldo regulable: Sí, 90 ° - 180 °. Tipo de mecanismo: Mecanismo de mariposa. Mecanismo de balanceo: Sí, 3 ° - 18 °. Clase y altura de elevación: de gas Nivel 4 probado por BIFMA, máx. 100 mm. Tamaño y tipo de base: Base de nailon de 350 mm. Tamaño y material de la rueda: Rueda de nailon de 65 mm. Material de la cubierta: Cuero sintético con dibujo de carbono','','Aerocool','SILLA-GAMER-THUNDERX3-TC3-JET-BLACK-BY-AEROCOOL-001.webp','','','','thumb-SILLA-GAMER-THUNDERX3-TC3-JET-BLACK-BY-AEROCOOL-001.webp','2022-07-12 21:26:54','2022-07-12 21:26:54'),
(16,5,'Silla Gamer Thunderx3 Tc3 Ember Red (By Aerocool)',76010,22,'Modelo: TC3. Peso máximo: 150 kg / 330 libras. Peso recomendado: 125 kg / 275 libras. Tipo de espuma: Espuma de alta densidad. Tipo de marco: Acero. Apoyabrazos regulables: Si, bidireccional. Respaldo regulable: Sí, 90 ° - 180 °. Tipo de mecanismo: Mecanismo de mariposa. Mecanismo de balanceo: Sí, 3 ° - 18 °. Clase y altura de elevación: de gas Nivel 4 probado por BIFMA, máx. 100 mmTamaño y tipo de base: Base de nailon de 350 mm. Tamaño y material de la rueda: Rueda de nailon de 65 mm. Material de la cubierta: Cuero sintético con dibujo de carbono','','Aerocool','SILLA-GAMER-THUNDERX3-TC3-EMBER-RED-BY-AEROCOOL-001.webp','','','','thumb-SILLA-GAMER-THUNDERX3-TC3-EMBER-RED-BY-AEROCOOL-001.webp','2022-07-12 21:30:49','2022-07-12 21:30:49'),
(17,2,'Monitor Benq Led 24 Gw2480 24W Black',51320,18,'Disfrutá de todas las cualidades que el monitor BenQ GW2480 tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.. Con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.. Este monitor de 24\' te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de 8 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.','Tamaño de pantalla: 23.8. Tipo de panel: IPS. Tecnología de retroiluminación: Retroiluminación LED. Resolución: Full HD (1920x1080 píxeles). Brillo: 250. Contraste nativo (típico): 1000:1. Ángulo de visión (I/D; A/B) (CR>=10): 178°/178°. Tiempo de respuesta: 8ms, 5ms(GtG). Tasa de actualización: 60Hz. Relación de aspecto: 16:9. Colores de pantalla: 16.7 millones de colores. Gama de color: 72% NTSC. Área de visualización (mm): 527.04x296.46. PPP: 93. DCR (Dynamic Contrast Ratio, relación de contraste dinámico) (típico) 20,000,000 : 1. Bit de color: 8 bit','Benq','MONITOR-BENQ-LED-24-GW2480-24W-BLACK-001.webp','','','','thumb-MONITOR-BENQ-LED-24-GW2480-24W-BLACK-001.webp','2022-07-12 21:30:53','2022-07-12 21:30:53'),
(18,2,'Monitor Gamer Gigabyte 24 G24F-Sa 165Hz Ips Gaming Full Hd',74080,19,'La apariencia aerodinámica representa la simplicidad de la filosofía de diseño de la serie de juegos GIGABYTE, un soporte resistente y un acabado mate construido para características funcionales y estéticas que agregan más a las características.. ¡Tiempo de respuesta súper rápido de 1 ms para la experiencia de juego más fluida que jamás haya existido!. Alta resolución y frecuencia de actualización rápida, lo que le brinda una calidad de visualización detallada y una experiencia de juego fluida.. Fantástica pantalla a color y 90% DCI-P3 de gama súper amplia de colores.. GIGABYTE OSD Sidekick le permite configurar las opciones de visualización con el teclado y el mouse, lo que le brinda la forma más fácil de ajustar la configuración del monitor.. El tablero revela la información de su hardware en tiempo real. La mejor parte es que ningún juego lo bloqueará.. Esta función le permite tener más detalles del lado oscuro sin sobreexponer el lado brillante al mismo tiempo.','','Gigabyte','MONITOR-GAMER-GIGABYTE-24-G24FSA-165HZ-IPS-GAMING-FULL-HD-001.webp','','','','thumb-MONITOR-GAMER-GIGABYTE-24-G24FSA-165HZ-IPS-GAMING-FULL-HD-001.webp','2022-07-12 21:31:53','2022-07-12 21:31:53'),
(19,7,'Joystick Playstation Ps4 Dualshock Gold',17580,14,'','','Sony','JOYSTICK-PLAYSTATION-PS4-DUALSHOCK-GOLD-001.webp','','','','thumb-JOYSTICK-PLAYSTATION-PS4-DUALSHOCK-GOLD-001.webp','2022-07-12 21:31:01','2022-07-12 21:31:01'),
(20,4,'Disco Externo 2 Tb Seagate Game Drive Para Ps4 Usb 3.0',19510,36,'Disco duro externo poderoso que le brinda montones de capacidad y un rendimiento perfecto en PS4™ de modo que pueda conservar los juegos que adora e instalar títulos nuevos.. Almacene una colección masiva de juegos nuevos y clásicos.. Diseñada en conjunto para brindar un rendimiento rápido y sin interrupciones. Configuración sencilla por conexión directa en USB 3.0.. Juegue en cualquier lugar con su fácil portabilidad','Compatibilidad:Pc. Compatibilidad:Windows. Compatibilidad:Playstation 4. Conectividad:USB 3.0. Factor de Forma:2.5 \'','Seagate','Disco-Externo-2-tb-Seagate-Game-Drive-para-PS4-Usb-30-001.webp','','','','thumb-Disco-Externo-2-tb-Seagate-Game-Drive-para-PS4-Usb-30-001.webp','2022-07-12 21:31:05','2022-07-12 21:31:05'),
(21,4,'Disco Ssd Adata 1Tb Spectrix Xpg S40G Gen 3X4 M.2 2280',26320,42,'Con la unidad en estado sólido XPG vas a incrementar la capacidad de respuesta de tu equipo. Gracias a esta tecnología podrás invertir en velocidad y eficiencia para el inicio, la carga y la transferencia de datos.. Este disco transfiere datos a través de sus interfaces PCIe 3.0 y NVMe 1.3, lo que te permite transmitir una mayor cantidad de información de una sola vez.','Marca: XPG. Línea: Spectrix S40G. Modelo: AS40G-1TT-C. Ancho: 80 mm. Altura: 22 mm. Profundidad: 8 mm. Peso: 13.4 g. Capacidad: 1 TB. Tecnología de almacenamiento: SSD. Interfaces: PCIe 3.0, NVMe 1.3. Aplicaciones: PC. Ubicación del disco: Interno. Factor de forma: M.2 2280. Con tecnología 3D NAND: Sí. Con disipador de calor: Sí','Spectrix','DISCO-SSD-ADATA-1TB-SPECTRIX-XPG-S40G-GEN-3X4-M2-2280-001.webp','','','','thumb-DISCO-SSD-ADATA-1TB-SPECTRIX-XPG-S40G-GEN-3X4-M2-2280-001.webp','2022-07-12 21:31:08','2022-07-12 21:31:08'),
(22,3,'Headset Kingston HyperX CloudX HSC2-CG',11400,29,'¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX CloudX no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.. El formato perfecto para vos. El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas.. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.','','Kingston','headset-kingston-hyperx-cloudx-hhsc2-001.webp','','','','thumb-headset-kingston-hyperx-cloudx-hhsc2-001.webp','2022-07-12 21:31:11','2022-07-12 21:31:11'),
(23,3,'Headset HP H500gs RGB',6999,42,'Iluminación LED tipo RGBZ. Diseño liviano: Brinda gran comodidad, diadema de suspensión suave y adaptable, orejeras. transpirables que envuelven el oído sin generar presión.. Micrófono antiestático para una excelente claridad en la voz.. Control en cable permite ajustar el volumen y silenciar el micrófono.. Virtual 7.1 Surround Sound para un sonido sorprendentemente real durante el juego.. Controladores de 50mm brindan un rendimiento sólido.','Conexión: USB 2.0. Rango de frecuencia: 20Hz - 20KHz. Driver: 50mm. Impedancia: 16 ohm. Largo de cable: 2m. Dimensiones: 220 x 220 x 95 mm. Peso: 380 g','HP','headsetHP-h500gs-001.webp','','','','thumb-headsetHP-h500gs-001.webp','2022-07-12 21:31:14','2022-07-12 21:31:14'),
(24,7,'Consola PS5 Blueray Sony CFI-1115A 825 GB SSD',176000,3,'La PS5, la consola de videojuegos más esperada de los últimos años, está de regreso en Hiraoka.com.pe. Por ello, preparamos esta nota para explicarte todo sobre sus especificaciones técnicas, características, accesorios y más sobre la PlayStation5. La nueva consola de Sony se encuentra disponible en dos versiones: la PS5 (con lectora de discos) y la PS5 Digital Edition. Además, de una serie de accesorios que harán tu experiencia de juego fantástica. Definitivamente, estamos hablando de una máquina fuera de serie y si quieres saber más sobre ella, sigue leyendo este artículo donde te contaremos todas sus características.','Procesador AMD Ryzen Zen 2 con 8 núcleos, 16 subprocesos.. Frecuencia variable de procesador hasta 3.5 GHz.. GPU AMD Radeon RDNA 2 con aceleración de trazado de rayos.. Frecuencia variable de GPU hasta 2.23 GHz (10.3 TFLOPS).. . Memoria GDDR6 16 GB con ancho de banda de 448 GB/s.. . Unidad de almacenamiento SSD 825 GB.. . Ancho de banda de lectura 5.5 GB/s (datos puros) y 9 GB/s (datos comprimidos).. . Sonido Tempest 3D AudioTech.. . Conectividad inalámbrica WiFi 6 y Bluetooth 5.1.. . Puertos: 1 HDMI 2.1, 2 USB 3.1, 1 USB 2.0, 1 USB 3.1 de tipo C, 1 Gigabit Ethernet y 1 ranura PCIe 4.0 M.2.. Lector óptico Blu-Ray 4K (no viene incluido en PS5 Digital Edition). Dimensiones 39 cm alto x 10.4 cm ancho x 26.0 cm profundidad.','Sony','ps5-bluray-001.webp','ps5-bluray-002.webp','ps5-bluray-003.webp','','thumb-ps5-bluray-001.webp','2022-07-12 21:31:16','2022-07-12 21:31:16');
UNLOCK TABLES;


--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
INSERT INTO `users`
VALUES (1,1,'Mar del Plata','Pali','Yafar','1986-06-09','1111111111','Tucuman','7600','palita65@gmail.com','2022-07-06 00:00:00','2022-07-11 00:00:00','user-image1657122327805.png','$2a$10$ZZPDb7fQJAjpZ.szaboXwOCEQ3.qUJn1qhxi/vuB2/VGVAPcDb6Aa'),
(2,1,'CABA','Nicky','Fel','1991-01-04','44448888','Del fuego 4444','1234','nicky@dh.com.ar','2022-07-12 20:41:20','2022-07-12 20:41:20','user-image1654650056311.png','$2a$10$z19jNrznceBa4DbaJbe3R..yJTxZaw9R0dZcTP.PIKCy1REuu7nga'),
(3,1,'CABA','Pablo','Larrea','1991-03-07','1144445555','Calle falsa 123','1234','nahuel.larrea@dh.com.ar','2022-07-12 20:51:44','2022-07-12 20:51:44','','$2a$10$nBj8eLrtgFcxK1qpe77TaeWCIH2GN0S9rvTodxucX1MAFDYDGQurK'),
(4,1,'Twin Peaks','Dani','Duque','3332-03-22','11111111','Calle Colombia 1234','1111','daniel@dh.com.ar','2022-07-12 20:52:21','2022-07-12 20:52:21','user-image1653362865166.jpg','$2a$10$EKqIBk4D.Fu8jVVj6kujn.vQOg0R8sjiN7dbbvNmoZInaKnAYNiZm'),
(5,2,'Cordoba','Gian','Quaranta','6544-04-06','43252323','Av Nodemon 1234','12134','gian@dh.com.ar','2022-07-12 20:58:01','2022-07-12 20:58:01','user-image1653398757773.png','$2a$10$6mS9jhe7vsYfYUSYuLCkt.4zc9TjBfVN4MounmENhMwKBoccAfWi.'),
(6,2,'Neuquen','Maria','Dumas','6544-04-06','4324252','Av digital 214','4322','maria@dh.com.ar','2022-07-12 20:55:02','2022-07-12 20:55:02','user-image1653398938655.png','$2a$10$GLFV9umFyIFECidVLJGdpOeh504LeKCFyGKlnTyqJo7dvECs98wZC'),
(7,2,'caba','Joe','Casas','6544-04-06','4324235','Av house 1213','3214','joe@dh.com.ar','2022-07-12 20:57:15','2022-07-12 20:57:15','user-image1653399387392.png','$2a$10$f33LSozEF9t5Ql6pmfTll.XtpIFyTsi5cN8zUQUNpVli58i/KoyTC'),
(8,2,'Bariloche','Lucas','Ackerman','6544-04-06','34252','Av. css 1111','11111','lucas@dh.com.ar','2022-07-12 20:57:09','2022-07-12 20:57:09','user-image1653400427393.png','$2a$10$z065bPT1Qups1xuTj.sUseqM2m3WWbqetjVrl9kBqfoicQTPAxX.a'),
(9,2,'San Luis','Juan','Meirino','6544-04-06','453634564','Av. HTML 4232','3453','juan@dh.com.ar','2022-07-12 20:56:49','2022-07-12 20:56:49','user-image1653400741369.png','$2a$10$pwBoEjErjwyBAuzbPPoWcOSGIawj6kFmq4ZQkDrJ/7rK27HwCCwaW');

UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
INSERT INTO `roles`
VALUES (1,'Admin',NULL,NULL),
(2,'Client',NULL,NULL),
(3,'Guest',NULL,NULL);
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
INSERT INTO `categories`
VALUES (1,'Notebooks',NULL,NULL,NULL),
(2,'Periféricos',NULL,NULL,NULL),
(3,'Accesorios',NULL,NULL,NULL),
(4,'Almacenamiento',NULL,NULL,NULL),
(5,'Sillas',NULL,NULL,NULL),
(6,'Componentes',NULL,NULL,NULL),
(7,'Consolas',NULL,NULL,NULL);
UNLOCK TABLES;
