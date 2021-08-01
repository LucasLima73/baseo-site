import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';


export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Quem são os heróis">
                   Sempre trazendo os melhores conteúdos para todos de graça, sempre!
                </Title>
                <div>
                    <TeamCard 
                        img={Image1}
                        name="Lucas Lima"
                        position="Fundador e CEO"
                    />
                </div>
            </div>
        </section>
    );
}
