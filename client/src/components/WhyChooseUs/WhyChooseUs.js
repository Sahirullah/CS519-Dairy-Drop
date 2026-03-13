import './WhyChooseUs.css';
import QualityIcon from '@mui/icons-material/VerifiedUser';
import PriceIcon from '@mui/icons-material/LocalOffer';
import DeliveryIcon from '@mui/icons-material/LocalShipping';
import SupportIcon from '@mui/icons-material/SupportAgent';
import VarietyIcon from '@mui/icons-material/Category';
import TrustIcon from '@mui/icons-material/Security';

const WhyChooseUs = () => {
    const reasons = [
        {
            id: 1,
            title: 'Premium Quality',
            description: 'We ensure all products meet the highest quality standards',
            icon: QualityIcon
        },
        {
            id: 2,
            title: 'Best Prices',
            description: 'Competitive pricing without compromising on quality',
            icon: PriceIcon
        },
        {
            id: 3,
            title: 'Fast Delivery',
            description: 'Quick and reliable delivery to your doorstep',
            icon: DeliveryIcon
        },
        {
            id: 4,
            title: '24/7 Support',
            description: 'Round-the-clock customer support for your queries',
            icon: SupportIcon
        },
        {
            id: 5,
            title: 'Wide Variety',
            description: 'Extensive range of products to choose from',
            icon: VarietyIcon
        },
        {
            id: 6,
            title: 'Secure Shopping',
            description: 'Safe and secure payment options for peace of mind',
            icon: TrustIcon
        }
    ];

    return (
        <div className="why-choose-us__container">
            <div className="why-choose-us__content">
                <h2 className="why-choose-us__title">Why Choose Us</h2>
                <p className="why-choose-us__subtitle">Discover what makes us the best choice for your shopping needs</p>
                <div className="why-choose-us__items">
                    {reasons.map(reason => {
                        const IconComponent = reason.icon;
                        return (
                            <div key={reason.id} className="why-choose-item">
                                <div className="why-choose-item__icon-wrapper">
                                    <IconComponent className="why-choose-item__icon" />
                                </div>
                                <h3 className="why-choose-item__title">{reason.title}</h3>
                                <p className="why-choose-item__description">{reason.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
