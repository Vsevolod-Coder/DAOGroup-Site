import React from 'react'
import "./Content.css"
import feature from "../../Assets/features.jpg"
import { Link } from 'react-router'
import Slider from './Slider/Slider'

const Content = () => {
  return (
    <section className='content'>
        <div className='content-wrapper'>
            <div className='content-block'>
                <div className='content-text-block'>
                    <h2 className='content-title'>О компании</h2>
                        <p className='context-text'>
                            <span className='DAOGroup'>DAOGroup</span> — сервис-ориентированный системный интегратор в Бишкеке, Кыргызстан, предоставляющий комплексные IT-решения для оптимизации бизнес-процессов. 
                        </p>
                        <p className='content-text'>
                            Компания ориентируется на инновации, развитие команды профессионалов и установление долгосрочных партнерских отношений. Ключевые преимущества включают надежность, соблюдение сроков, высокое качество, квалифицированных специалистов и поддержку клиентов на всех этапах сотрудничества. 
                        </p>
                        <p className='content-text'>
                            <span className='DAOGroup'>DAOGroup</span> предоставляет услуги системной интеграции, информационной безопасности и IT-инфраструктуры. Компания реализует проекты любой сложности, включая разработку IT-инфраструктуры, техническую поддержку, защиту данных и виртуализацию. 
                        </p>
                        <p className='content-text'>
                            Компания сотрудничает с ведущими мировыми брендами, обладая сертификацией, подтверждающей ее компетенции(для подробной информации смотрите раздел <Link to="/partners" className='partners-link'>партнёры</Link>)
                        </p>
                        <p className='content-text'>
                            <span className='DAOGroup'>DAOGroup</span> нацелена на создание эффективных решений, отвечающих требованиям современных технологий, и остается надежным партнером для своих клиентов, предоставляя высококачественные услуги и поддержку.
                        </p>
                </div>
                <div className='content-slider-block'>
                    <Slider />
                </div>
            </div>
        </div>
        <div className='content-slicer'></div>
    </section>
  )
}

export default Content
