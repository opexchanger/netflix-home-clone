import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

const FaqsContainer = () => (
    <Accordion>
        <Accordion.Title>Frequently Asqued Questions</Accordion.Title>
        {faqsData.map((faq) => (
            <Accordion.Item key={faq.id}>
                <Accordion.Header>{faq.header}</Accordion.Header>
                <Accordion.Body>{faq.body}</Accordion.Body>
            </Accordion.Item>
        ))}

        <OptForm>
            <OptForm.Text>
                Pronto para assistir? Informe seu email para criar ou reiniciar
                sua assinatura.
            </OptForm.Text>
            <OptForm.Input placeholder='Email'></OptForm.Input>
            <OptForm.Button>Vamos lá</OptForm.Button>
        </OptForm>
    </Accordion>
);

export default FaqsContainer;
