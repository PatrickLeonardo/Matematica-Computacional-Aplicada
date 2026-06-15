import pandas as pd

dados_de_supervisionamento = [
    {"Email": 1,  "Promoção": "sim", "Grátis": "sim", "Classe": "Spam"  },
    {"Email": 2,  "Promoção": "sim", "Grátis": "não", "Classe": "Normal"},
    {"Email": 3,  "Promoção": "não", "Grátis": "não", "Classe": "Normal"},
    {"Email": 4,  "Promoção": "não", "Grátis": "sim", "Classe": "Spam"  },
    {"Email": 5,  "Promoção": "sim", "Grátis": "não", "Classe": "Spam"  },
    {"Email": 6,  "Promoção": "sim", "Grátis": "não", "Classe": "Normal"},
    {"Email": 7,  "Promoção": "não", "Grátis": "não", "Classe": "Normal"},
    {"Email": 8,  "Promoção": "não", "Grátis": "sim", "Classe": "Spam"  },
    {"Email": 9,  "Promoção": "sim", "Grátis": "não", "Classe": "Normal"},
    {"Email": 10, "Promoção": "não", "Grátis": "sim", "Classe": "Normal"},
    {"Email": 11, "Promoção": "sim", "Grátis": "sim", "Classe": "Spam"  },
    {"Email": 12, "Promoção": "sim", "Grátis": "não", "Classe": "Normal"},
    {"Email": 13, "Promoção": "não", "Grátis": "não", "Classe": "Spam"  },
    {"Email": 14, "Promoção": "não", "Grátis": "sim", "Classe": "Normal"},
    {"Email": 15, "Promoção": "sim", "Grátis": "não", "Classe": "Normal"},
]

def classificar_email(promocao, gratis):

    df = pd.DataFrame(dados_de_supervisionamento)
    df_spam = df[df["Classe"] == "Spam"]
    df_normal = df[df["Classe"] == "Normal"]

    # Probabilidades a Priori

    priori_spam = len(df_spam) / len(df)
    priori_normal = len(df_normal) / len(df)

    # Probabilidades Condicionais

    promocao_sim_spam = (df_spam["Promoção"] == promocao).sum()
    promocao_sim_normal = (df_normal["Promoção"] == promocao).sum()

    gratis_sim_spam = (df_spam["Grátis"] == gratis).sum()
    gratis_sim_normal = (df_normal["Grátis"] == gratis).sum()

    p_promocao_sim_spam = promocao_sim_spam / len(df_spam)
    p_promocao_sim_normal = promocao_sim_normal / len(df_normal)

    p_gratis_sim_spam = gratis_sim_spam / len(df_spam)
    p_gratis_sim_normal = gratis_sim_normal / len(df_normal)

    # Aplicação do Naive Bayes
    # Probabilidades Proporcionais

    score_spam = priori_spam * p_promocao_sim_spam * p_gratis_sim_spam
    score_normal = priori_normal * p_promocao_sim_normal * p_gratis_sim_normal

    # Normalização

    soma_scores = score_spam + score_normal
    proporcional_spam = score_spam / soma_scores
    proporcional_normal = score_normal / soma_scores

    # Classe prevista

    classe_prevista = "Spam" if (proporcional_spam > proporcional_normal) else "Normal"

    print("------------------------------------------------------------")
    print("Email avaliado:")
    print(f"Promoção = {promocao}")
    print(f"Grátis   = {gratis}")
    print()
    print(f"P(Spam   | x) = {proporcional_spam:.2%}")
    print(f"P(Normal | x) = {proporcional_normal:.2%}")
    print()
    print(f"Classe prevista = {classe_prevista}")
    print("------------------------------------------------------------")

classificar_email("sim", "sim")
classificar_email("não", "não")
classificar_email("sim", "não")
classificar_email("não", "sim")
