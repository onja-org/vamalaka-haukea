import { Header } from '../Header'
import { PageFooter } from '../PageFooter/PageFooter'
import { loggedOut } from '../HeaderNavLink/HeaderNavLink'
import styled from 'styled-components'
import { mediaQueriesPx } from '../../mediaQueries'

const footerLinks = [
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
      { linkContent: 'About', linkUrl: '#about' },
    ],
    id: '1',
  },
  {
    summary: 'Vamalaka',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '2',
  },
  {
    summary: 'LearnGasy',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
      { linkContent: 'Others', linkUrl: '#others' },
    ],
    id: '3',
  },
  {
    summary: 'Vamalaka Developers',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '4',
  },
  {
    summary: 'Others',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '5',
  },
]

export interface ContainerProps {
  children: JSX.Element
}

export const CommonPageContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <PageContainer>
      <Header item={loggedOut} />
      <Container>{children}</Container>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </PageContainer>
  )
}
const PageContainer = styled.div`
	& > header h1 {
		margin-left: 14px;
		${mediaQueriesPx('lg', null)`
			margin-left: 25px;
		`}
	}
	& > header ul {
		margin-right: 15px;
	}
	& > header, main {
		max-width: 1360px;
    	margin: auto;
	}
`;

const Container = styled.main`
  margin: 0 16px;
  ${mediaQueriesPx('lg', null)`
		margin: 0 42px;
	`}
`
const FooterContainer = styled.div`
  footer > div {
    margin: auto;
  }

  ${mediaQueriesPx(null, 'md')`
   footer > div {
      min-height: 184px;
    }
  `}
`
